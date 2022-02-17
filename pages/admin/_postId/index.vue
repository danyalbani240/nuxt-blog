<template>
  <div class="post-edit">
    <form @submit.prevent="">
      <label>Title:</label>
      <app-input v-model="title" placeholder="What is Javascript,...." />
      <label>content:</label>
      <app-input
        v-model="content"
        :textArea="true"
        placeholder="javascript is ....."
      />
      <app-button @click="formSubmit">Submit</app-button>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/Base/AppButton.vue'
import AppInput from '@/components/Base/AppInput.vue'
import axios from 'axios'

export default {
  async fetch(context) {
    this.postBaseData = await axios
      .get(
        `https://nuxt-bc2d9-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then((res) => res.data)
      .catch((err) => {
        console.log(err)
      })
  },
  data() {
    return {
      postBaseData: {},
      title: '',
      content: '',
    }
  },
  watch: {
    postBaseData: (newValue) => {
      console.log(newValue)
    },
  },
  mounted() {
    console.log(this.postBaseData)
  },
  components: {
    AppButton,
    AppInput,
  },
  methods: {
    formSubmit() {
      console.log(this.title, this.content)
    },
  },
}
</script>

<style></style>
