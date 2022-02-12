import axios from 'axios'
export const state = () => ({
  loadedPosts: [],
  token: null,
})
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  setToken(state, token) {
    state.token = token
  },
}
export const actions = {
  // getting the posts from firebase
  nuxtServerInit(vueContext, context) {
    return axios
      .get('https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json')
      .then((res) => {
        let postsArray = []

        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        vueContext.commit('setPosts', postsArray)
      })
      .catch((e) => {
        console.log(e)
      })
  },
  setPosts(context, posts) {
    context.commit('setPosts', posts)
  },
  editPost(vueXcontext, newDAta) {
    axios({
      method: 'put',
      url: 'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/',
    })
  },
  signUp(vueContext, userData) {
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
