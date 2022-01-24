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
import AppButton from '@/components/Base/AppButton.vue';
import AppInput from '@/components/Base/AppInput.vue';
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
