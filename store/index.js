export const state = () => ({
  loadedPosts: [],
})
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
}
export const actions = {
  nuxtServerInit(vueContext, context) {
    console.log('started')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        vueContext.commit('setPosts', [
          {
            id: 1,
            title: 'post-1',
            content: 'post one content here',
          },
          {
            id: 2,
            title: 'post-2',
            content: 'post two content here',
          },
        ])
        resolve()
      }, 2000)
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
