<template>
  <form
    v-if="!editPostForm"
    @submit.prevent="
      $emit('submit', {
        title: title,
        content: content,
        date: Date.now(),
        author: 'Danyal',
      })
    "
    class="flex flex-col mt-10 create-post-form"
  >
    <AppInput
      class="sm:w-5/12 w-11/12"
      label="Title"
      :value="title"
      @input="title = $event"
      :placeholder="'How Javascript Works'"
    />
    <AppInput
      :textArea="true"
      class="sm:w-5/12 mt-10 w-11/12"
      label="Content"
      :value="content"
      @input="content = $event"
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
        lastEdit: new Date().getTime(),
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
    <AppButton @click="$emit('delete')" class="mt-10 text-red-700 mx-auto">
      DeletePost
    </AppButton>
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
    if (!!this.postData) {
      this.title = this.postData.title
      this.content = this.postData.content
    }
  },
}
</script>

<style></style>
