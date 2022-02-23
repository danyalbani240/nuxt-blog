<template>
  <div class="main-page flex-1 flex flex-col justify-between">
    <h1>Danyal Blog</h1>
    <div v-if="!loadedPosts">Loading...</div>
    <PostList v-else :posts="loadedPosts" />
    <div v-if="!isloaded" class="flex justify-center mb-2">
      <AppButton @click="loadMore">loadPost</AppButton>
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
    isloaded() {
      return this.loadedPosts.length > 0
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch('loadNewPosts')
    },
  },
}
</script>

<style scoped>
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
