<template>
  <div
    class="navigation bg-red-100 pl-4 h-20 items-center flex justify-between"
  >
    <nuxt-link to="/">Home</nuxt-link>
    <div class="flex-1 justify-between px-20 flex">
      <nuxt-link to="/posts">posts</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
      <nuxt-link v-if="!isLogedin" to="/admin/auth">sign-in/sign-up</nuxt-link>
      <nuxt-link v-else to="/admin">dashboard</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLogedin() {
      return !!this.$store.getters.token
    },
  },
}
</script>

<style></style>
