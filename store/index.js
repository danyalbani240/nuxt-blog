import axios from 'axios'
export const state = () => ({
  loadedPosts: [],
})
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
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
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
}
