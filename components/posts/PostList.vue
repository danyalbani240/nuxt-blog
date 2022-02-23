<template>
  <div class="post-list w-3/4 my-20 mx-auto flex justify-between flex-wrap">
    <PostPreview
      :admin="admin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :content="post.content"
      :id="post.id"
      :key="post.id"
      v-for="post in posts"
    />
  </div>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview.vue'
export default {
  components: {
    PostPreview,
  },
  props: {
    admin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
/* .post-list {

} */
</style>
