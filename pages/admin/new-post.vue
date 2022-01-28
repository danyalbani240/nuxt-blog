<template>
  <div class="new-post">
    <form @submit.prevent="">
      <label>Title:</label>
      <app-input v-model="post.title" placeholder="What is Javascript,...." />
      <label>content:</label>
      <app-input
        v-model="post.content"
        :textArea="true"
        placeholder="javscript is ....."
      />
      <app-button @click="formSubmit">Submit</app-button>
    </form>
  </div>
</template>

<script>
import AppButton from '~/components/Base/AppButton.vue'
import AppInput from '~/components/Base/AppInput.vue'
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
