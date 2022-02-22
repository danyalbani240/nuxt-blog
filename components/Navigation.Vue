<template>
  <div class="navigation hidden md:flex px-4 h-20 items-center justify-between">
    <nuxt-link class="profile-icon rounded-full" to="/admin">
      <img src="../assets/images/profile.png" alt="" />
    </nuxt-link>
    <div class="w-3/12 flex justify-between">
      <nuxt-link class="text-gray-400 hover:text-black transition-all" to="/"
        >Home</nuxt-link
      >
      <nuxt-link
        class="text-gray-400 hover:text-black transition-all"
        to="/posts"
        >posts</nuxt-link
      >
      <nuxt-link
        class="text-gray-400 hover:text-black transition-all"
        to="/about"
        >about</nuxt-link
      >
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

<style>
.profile-icon img {
  width: 50%;
  height: 50%;
}
.nuxt-link-exact-active:not(.profile-icon) {
  color: #e7165d;
  border-bottom: 2px solid #ff357a;
  padding-bottom: 4px;
}
</style>
