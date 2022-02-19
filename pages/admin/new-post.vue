<template>
  <div class="new-post">
    <BaseForm @submit="formSubmitHandle" />
  </div>
</template>

<script>
import AppButton from '~/components/Base/AppButton.vue'
import AppInput from '~/components/Base/AppInput.vue'
import BaseForm from '~/components/Base/BaseForm.vue'
import axios from 'axios'
export default {
  data() {
    return {}
  },
  components: {
    AppButton,
    AppInput,
    BaseForm,
  },
  middleware: ['auth', 'get-auth'],

  methods: {
    formSubmitHandle(post) {
      this.$store
        .dispatch('createPost', post)
        .then((result) => {
          console.log(result)
          this.$router.push('/')
        })
        .catch((err) => {})
    },
  },
}
</script>

<style></style>
