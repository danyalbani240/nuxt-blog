<template>
  <div class="main-page flex-1 flex flex-col justify-between">
    <h1>Danyal Blog</h1>
    <div v-if="!loadedPosts">Loading...</div>
    <PostList v-else :posts="loadedPosts" />
    <div class="flex justify-center mb-2">
      <AppButton @click="loadMore">LoadMore</AppButton>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
import AppButton from '~/components/Base/AppButton.vue'
export default {
  components: {
    PostList,
    AppButton,
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch('loadNewPosts')
    },
  },
}
</script>

<style>
h1 {
  text-align: center;
  font-size: 200px;
  font-weight: bold;
  border-bottom: 3px solid black;
  display: inline-block;
  width: 75%;
  margin: 0 auto;
}
</style>
