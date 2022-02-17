<template>
  <div class="new-post">
    <BaseForm />
  </div>
</template>

<script>
import AppButton from '~/components/Base/AppButton.vue'
import AppInput from '~/components/Base/AppInput.vue'
import BaseForm from '~/components/Base/BaseForm.vue'
import axios from 'axios'
export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        date: Date.now(),
        author: 'Danyal',
      },
    }
  },
  components: {
    AppButton,
    AppInput,
    BaseForm,
  },
  methods: {
    formSubmit() {
      console.log(this.post)
      axios
        .post(
          'https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts.json',
          this.post
        )
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            this.$router.push('/')
          }
        })
    },
  },
}
</script>

<style></style>
