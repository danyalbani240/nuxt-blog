<template>
  <div class="post-edit">
    <form @submit.prevent="">
      <label>Title:</label>
      <app-input v-model="title" placeholder="What is Javascript,...." />
      <label>content:</label>
      <app-input
        v-model="content"
        :textArea="true"
        placeholder="javscript is ....."
      />
      <app-button @click="formSubmit">Submit</app-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
    }
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
