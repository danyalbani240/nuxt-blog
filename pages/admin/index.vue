<template>
  <div class="admin-page">
    <app-button @click="$router.push('/admin/new-post')"
      >Create Post</app-button
    >

    <PostList :admin="true" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import AppButton from '~/components/Base/AppButton.vue'
export default {
  components: { PostList, AppButton },
}
</script>

<style></style>
