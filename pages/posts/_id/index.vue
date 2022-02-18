<template>
  <div class="post-page">
    <h1 class="post-title text-3xl text-center">{{ loadedPost.title }}</h1>
    <img
      class="cover mx-auto"
      src="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
    />
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

<style>
.cover {
  height: 400px;
  width: 90%;
  background-size: cover;
}
.post-content {
  width: 90%;
  text-align: justify;
}
</style>
