<template>
  <input
    type="text"
    class="base-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
    v-if="!textArea"
  />
  <textarea
    v-else
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    textArea: {
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style></style>
