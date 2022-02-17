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
    @submit.prevent="$emit('submit')"
    class="flex flex-col mt-10 edit-post-form"
  >
    <AppInput class="sm:w-5/12 w-11/12" label="Title" />
    <AppInput
      :textArea="true"
      class="sm:w-5/12 mt-10 w-11/12"
      label="Content"
    />
    <AppButton class="mt-10 mx-auto"> EditPost </AppButton>
  </form>
</template>

<script>
import AppInput from './AppInput.vue'
import AppButton from './AppButton.vue'
export default {
  components: { AppInput, AppButton },
  props: {
    editPostForm: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
