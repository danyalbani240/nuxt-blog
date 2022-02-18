<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
    <div class="flex items-center mt-20">
      <AppButton class="mx-auto" @click="loadMore">LoadMore</AppButton>
    </div>
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
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

<style></style>
