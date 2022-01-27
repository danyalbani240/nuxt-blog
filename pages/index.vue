<template>
  <div class="main-page">
    <div v-if="!loadedPosts">Loading...</div>
    <PostList v-else :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
export default {
  components: {
    PostList,
  },
  // data() {
  //   return {
  //     loadedPosts: [],
  //   }
  // },
  // async fetch(context) {

  //   if (context.store.getters.loadedPosts == 0) {
  //     console.log(context)

  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve({
  //           loadedPosts: [
  //             {
  //               id: 1,
  //               title: 'post-1',
  //               content: 'post one content here',
  //             },
  //             {
  //               id: 2,
  //               title: 'post-2',
  //               content: 'post two content here',
  //             },
  //           ],
  //         })
  //       }, 2000)
  //     }).then((data) => context.store.commit('setPosts', data.loadedPosts))
  //   }

  //   // setTimeout(() => {
  //   //   callback(null, {
  //   //     loadedPosts: [
  //   //       {
  //   //         id: 1,
  //   //         title: 'post-1',
  //   //         content: 'post one content here',
  //   //       },
  //   //       {
  //   //         id: 2,
  //   //         title: 'post-2',
  //   //         content: 'post two content here',
  //   //       },
  //   //     ],
  //   //   })
  //   // }, 1500)
  //   // this.loadedPosts = await new Promise((resolve, reject) => {
  //   //   setTimeout(() => {
  //   //     resolve([
  //   //       {
  //   //         id: 1,
  //   //         title: 'post-1',
  //   //         content: 'post one content here',
  //   //       },
  //   //       {
  //   //         id: 2,
  //   //         title: 'post-2',
  //   //         content: 'post two content here',
  //   //       },
  //   //     ])
  //   //   }, 15000)
  //   // })
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
}
</script>

<style></style>
