<template>
  <div v-if="!textArea" class="flex flex-col mx-auto">
    <label>{{ label }}:</label>

    <input
      :type="type"
      class="base-input py-2 pl-4 focus:outline-none focus:border-gray-500 focus:border-4 border-2 rounded pr-10 mt-2 transition-all"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>

  <div v-else class="flex flex-col mx-auto">
    <label>{{ label }}:</label>
    <textarea
      class="y-2 pl-4 focus:outline-none focus:border-gray-500 focus:border-4 border-2 rounded pr-10 h-40 pt-2 mt-2 transition-all"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
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
