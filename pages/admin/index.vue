<template>
  <div class="admin-page">
    <div class="flex items-center mt-10">
      <app-button class="mx-auto" @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
      <app-button class="mx-auto" @click="handleLogout">log out</app-button>
    </div>

    <PostList :posts="loadedPosts" :admin="true" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import AppButton from '~/components/Base/AppButton.vue'
export default {
  middleware: ['get-auth', 'auth'],

  components: { PostList, AppButton },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout').then((res) => this.$router.push('/'))
    },
  },
}
</script>

<style></style>
