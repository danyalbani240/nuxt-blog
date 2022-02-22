<template>
  <div class="layout-container min-h-screen flex flex-col bg-no-repeat">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>

<style>
.layout-container {
  background-color: #e3e6ec;
  width: 100%;
  background-image: url(../assets/images/bgcircle.svg);
  background-position: top center;
}
input:autofill {
  background: #fff; /* or any other */
}
</style>
