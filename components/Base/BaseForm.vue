<template>
  <form
    v-if="!editPostForm"
    @submit.prevent="$emit('submit')"
    class="flex flex-col mt-10 create-post-form"
  >
    <AppInput
      class="sm:w-5/12 w-11/12"
      label="Title"
      :placeholder="'How Javascript Works'"
    />
    <AppInput
      :textArea="true"
      class="sm:w-5/12 mt-10 w-11/12"
      label="Content"
      :placeholder="'javascript in background....'"
    />
    <AppButton class="mt-10 mx-auto"> AddPost </AppButton>
  </form>
  <form
    v-else-if="editPostForm"
    @submit.prevent="
      $emit('submit', {
        ...postData,
        title: title,
        content: content,
        lastEdit: new Date(),
      })
    "
    class="flex flex-col mt-10 edit-post-form"
  >
    <AppInput
      :value="title"
      @input="title = $event"
      class="sm:w-5/12 w-11/12"
      label="Title"
    />
    <AppInput
      :textArea="true"
      class="sm:w-5/12 mt-10 w-11/12"
      label="Content"
      :value="content"
      @input="content = $event"
    />
    <AppButton class="mt-10 mx-auto"> EditPost </AppButton>
  </form>
</template>

<script>
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'
import axios from 'axios'
export default {
  components: { AppInput, AppButton },
  props: {
    editPostForm: {
      type: Boolean,
      default: false,
    },
    postData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  mounted() {
    this.title = this.postData.title
    this.content = this.postData.content
  },
}
</script>

<style></style>
