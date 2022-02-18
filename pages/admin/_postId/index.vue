<template>
  <BaseForm
    @submit="handleSubmit"
    :postData="loadedPost"
    :editPostForm="true"
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
    handleSubmit() {},
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
