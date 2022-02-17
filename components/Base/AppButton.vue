<template>
  <button
    class="base-button px-4 py-2 bg-blue-200 text-gray-600 rounded hover:text-gray-800 hover:bg-blue-300 transition-all"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
