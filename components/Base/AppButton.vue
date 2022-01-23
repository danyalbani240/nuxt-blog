<template>
  <button class="base-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
