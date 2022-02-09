<template>
  <input
    :type="type"
    class="base-input"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    v-if="!textArea"
    :placeholder="placeholder"
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
      default: false,
    },
    value: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style></style>
