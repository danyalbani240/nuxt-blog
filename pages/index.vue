<template>
  <div class="main-page">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
export default {
  components: {
    PostList,
  },
  data() {
    return {
      posts: [
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
    }
  },
}
</script>

<style></style>
