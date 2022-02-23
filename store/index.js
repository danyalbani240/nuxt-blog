import axios from 'axios'
import Cookie from 'js-cookie'
export const state = () => ({
  loadedPosts: [],
  loadedPostsCounter: 6,
  token: null,
})
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  increasePostsCounter(state) {
    state.loadedPostsCounter += 6
  },
  editPost(state, editedPost) {
    let index = state.loadedPosts.indexOf(
      state.loadedPosts.find((post) => post.id === editedPost.id)
    )
    state.loadedPosts[index] = editedPost
  },
  addPost(state, post) {
    state.loadedPosts.unshift(post)
  },
  deletePost(state, id) {
    let index = state.loadedPosts.indexOf(
      state.loadedPosts.find((post) => post.id === id)
    )

    state.loadedPosts.splice(index, index)
  },
  setToken(state, token) {
    state.token = token
  },
  deleteToken(state) {
    state.token = null
  },
}
export const actions = {
  // getting the posts from firebase
  // nuxtServerInit(vueContext, context) {
  //   return axios
  //     .get(
  //       'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json?orderBy="date"&limitToLast=3'
  //     )
  //     .then((res) => {
  //       let postsArray = []
  //       for (const key in res.data) {
  //         postsArray.push({ ...res.data[key], id: key })
  //       }

  //       vueContext.commit('setPosts', postsArray.reverse())
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // },

  loadNewPosts(vueXcontext) {
    return axios
      .get(
        `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json?orderBy="date"&limitToLast=${
          vueXcontext.state.loadedPostsCounter + 6
        }`
      )
      .then((res) => {
        vueXcontext.commit('increasePostsCounter')

        let postsArray = []

        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        vueXcontext.commit('setPosts', postsArray.reverse())
      })
      .catch((e) => {
        console.log(e)
      })
  },
  editPost(vueXcontext, py) {
    //checking if the content are changed or not so do not send shit req
    if (
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id).title ===
        py.title &&
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id)
        .content === py.content &&
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id)
        .thumbnail === py.thumbnail
    ) {
      return Promise.resolve()
    } else if (
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id).id ===
      py.id
    ) {
      vueXcontext.commit('editPost', py)
      let sending = { ...py }
      delete sending.id
      return axios
        .put(
          `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/${py.id}.json?auth=${vueXcontext.state.token}}`,
          sending
        )
        .catch((e) => console.log(e))
    }
  },
  createPost(vueXContext, postData) {
    return axios
      .post(
        `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json?auth=${vueXContext.state.token}`,
        postData
      )
      .then((res) => {
        vueXContext.commit('addPost', { ...postData, id: res.data.name })
      })
      .catch((e) => console.log(e))
  },
  deletePost(vueXContext, id) {
    return axios
      .delete(
        `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/${id}.json?auth=${vueXcontext.state.token}`
      )
      .then((res) => {
        vueXContext.commit('deletePost', id)
      })
  },
  //auth stuff
  signUp(vueXContext, userData) {
    return axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        process.env.apiKey,
      { ...userData, returnSecureToken: true }
    )
  },
  signIn(vueContext, userData) {
    return axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.apiKey,
        { ...userData, returnSecureToken: true }
      )
      .then((res) => {
        vueContext.commit('setToken', res.data.idToken)
        Cookie.set('jwt', res.data.idToken)
        Cookie.set(
          'expirationDate',
          new Date().getTime() + +res.data.expiresIn * 1000
        )
        vueContext.dispatch('invalidTime', +res.data.expiresIn * 1000)
      })
      .catch((e) => console.log(e))
  },
  invalidTime(vueXContext, duration) {
    setTimeout(() => {
      vueXContext.commit('deleteToken')
    }, duration)
  },
  startAuth(vueXContext, req) {
    //check if it's server side ot client
    if (!!req) {
      //server
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find((key) => key.trim().startsWith('jwt='))
      const expirationCookie = req.headers.cookie
        .split(';')
        .find((key) => key.trim().startsWith('expirationDate='))
      if (!jwtCookie) {
        return
      } else {
        const token = jwtCookie.split('=')[1]
        const expirationDate = expirationCookie.split('=')[1]
        if (new Date().getTime() >= expirationDate) {
          return
        } else {
          vueXContext.dispatch(
            'invalidTime',
            +expirationDate - new Date().getTime()
          )
          vueXContext.commit('setToken', token)
        }
      }
    } else {
      //client
      if (!document.cookie) {
        return
      }
      const jwtCookie = document.cookie
        .split(';')
        .find((key) => key.trim().startsWith('jwt='))
      const expirationCookie = document.cookie
        .split(';')
        .find((key) => key.trim().startsWith('expirationDate='))
      //if cookie is not setted return
      if (!jwtCookie) {
        return
      } else {
        //else get the token and expirationDate
        const token = jwtCookie.split('=')[1]
        const expirationDate = expirationCookie.split('=')[1]
        if (new Date().getTime() >= +expirationDate) {
          return
        } else {
          vueXContext.dispatch(
            'invalidTime',
            +expirationDate - new Date().getTime()
          )
          vueXContext.commit('setToken', token)
        }
      }
    }
  },
  logout(vueXContext) {
    vueXContext.commit('deleteToken')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    return Promise.resolve()
  },
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  token(state) {
    return state.token
  },
}
