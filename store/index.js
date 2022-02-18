import axios from 'axios'
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
}
export const actions = {
  // getting the posts from firebase
  nuxtServerInit(vueContext, context) {
    return axios
      .get(
        'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json?orderBy="date"&limitToLast=3'
      )
      .then((res) => {
        let postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        vueContext.commit('setPosts', postsArray.reverse())
      })
      .catch((e) => {
        console.log(e)
      })
  },

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
    if (
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id).title ===
        py.title &&
      vueXcontext.state.loadedPosts.find((post) => post.id === py.id)
        .content === py.content
    ) {
      return Promise.resolve()
    } else {
      vueXcontext.commit('editPost', py)
      let sending = { ...py }
      delete sending.id
      return axios
        .put(
          `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/${py.id}.json`,
          sending
        )
        .catch((e) => console.log(e))
    }
  },
  signUp(vueXContext, userData) {
    axios({
      method: 'post',
      url:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        process.env.apiKey,
      data: { ...userData, returnSecureToken: true },
    })
  },
  signIn(vueContext, userData) {
    return axios({
      method: 'post',
      url:
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        process.env.apiKey,
      data: { ...userData, returnSecureToken: true },
    }).then((res) => {
      vueContext.commit('setToken', res.data.idToken)
      return true
    })
  },
  createPost(vueXContext, postData) {
    return axios
      .post(
        'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .then((res) => {
        vueXContext.commit('addPost', { ...postData, id: res.data.name })
      })
      .catch((e) => console.log(e))
  },
  deletePost(vueXContext, id) {
    return axios
      .delete(`https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/${id}.json`)
      .then((res) => {
        vueXContext.commit('deletePost', id)
      })
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
