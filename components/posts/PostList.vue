<template>
  <div class="post-list pt-32 flex justify-evenly flex-wrap">
    <PostPreview
      :admin="admin"
      thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
      title="post-title"
      content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    /><PostPreview
      :admin="admin"
      thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
      title="post-title2"
      content="lorem1 ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    /><PostPreview
      :admin="admin"
      thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:auto/h:auto/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg"
      title="post-title3"
      content="lorem2 ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
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
