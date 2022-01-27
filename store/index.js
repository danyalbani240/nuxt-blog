export const state = {
  loadedPosts: [],
}
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
}
export const actions = {
  setPosts(context, posts) {
    context.commit('setPosts', posts)
  },
}
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
}
