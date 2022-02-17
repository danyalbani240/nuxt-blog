<template>
  <BaseForm @submit="handleSubmit" :editPostForm="true" />
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
}
</script>

<style></style>
