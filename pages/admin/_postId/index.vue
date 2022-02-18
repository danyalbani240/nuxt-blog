<template>
  <BaseForm
    @submit="handleSubmit"
    :postData="loadedPost"
    :editPostForm="true"
    @delete="handleDelete"
  />
</template>

<script>
import AppButton from '@/components/Base/AppButton.vue'
import AppInput from '@/components/Base/AppInput.vue'
import BaseForm from '~/components/Base/BaseForm.vue'

export default {
  data() {
    return {}
  },

  components: {
    AppButton,
    AppInput,
    BaseForm,
  },
  methods: {
    handleSubmit(newData) {
      this.$store
        .dispatch('editPost', {
          id: this.$route.params.postId,
          ...newData,
        })
        .then((res) => {
          this.$router.push('/')
        })
    },
    handleDelete() {
      this.$store
        .dispatch('deletePost', this.$route.params.postId)
        .then((res) => {
          this.$router.push('/')
        })
    },
  },
  computed: {
    loadedPost() {
      return this.$store.getters.loadedPosts.find(
        (post) => post.id == this.$route.params.postId
      )
    },
  },
}
</script>

<style></style>
