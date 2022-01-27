<template>
  <div class="main-page">
    <PostList :posts="loadedPosts" />
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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
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
          ],
        })
      }, 1500)
    })
    // setTimeout(() => {
    //   callback(null, {
    //     loadedPosts: [
    //       {
    //         id: 1,
    //         title: 'post-1',
    //         content: 'post one content here',
    //       },
    //       {
    //         id: 2,
    //         title: 'post-2',
    //         content: 'post two content here',
    //       },
    //     ],
    //   })
    // }, 1500)
  },
}
</script>

<style></style>
