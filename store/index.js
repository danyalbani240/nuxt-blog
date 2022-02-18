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
  addPosts(state, newposts) {
    state.loadedPosts.push(newposts)
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
        'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json?orderBy="date"&limitToLast=1'
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
        console.log(res.data)
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        vueXcontext.commit('setPosts', postsArray.reverse())
      })
      .catch((e) => {
        console.log(e)
      })
  },
  editPost(vueXcontext, newDAta) {
    axios({
      method: 'put',
      url: 'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/',
    })
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
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  token(state) {
    return state.token
  },
}
