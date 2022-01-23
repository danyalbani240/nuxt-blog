<template>
  <input
    type="text"
    class="base-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {}
</script>

<style></style>
