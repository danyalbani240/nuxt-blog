<template>
  <div class="post-page mx-auto">
    <h1 class="post-title text-3xl text-center">{{ loadedPost.title }}</h1>
    <img class="cover mx-auto mt-20" :src="loadedPost.thumbnail" />
    <p class="post-content mx-auto mt-20">{{ loadedPost.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPost() {
      return this.$store.getters.loadedPosts.find(
        (post) => post.id == this.$route.params.id
      )
    },
  },
}
</script>

<style scoped>
.post-page {
  width: 75%;
}
h1 {
  font-size: 100px;
  line-height: 100px;
  font-weight: 600;
  letter-spacing: -1px;
  max-width: 1440px;
}
</style>
