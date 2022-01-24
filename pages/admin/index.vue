<template>
  <div class="admin-page">
    <PostList :admin="true" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
export default {
  components: { PostList },

}
</script>

<style>

</style>