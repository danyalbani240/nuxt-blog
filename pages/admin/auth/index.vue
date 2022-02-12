<template>
  <div class="auth-page">
    <SignIn v-if="method === 'sign-in'" />

    <SignUp v-else />
    <p class="text-center mt-10">
      didn't registered yet?
      <span @click="toggleState" class="cursor-pointer text-blue-500 underline">
        {{ signMEthod }}</span
      >
    </p>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue'
import SignIn from '~/components/SignIn.vue'
export default {
  components: {
    SignUp,
    SignIn,
  },
  data() {
    return {
      method: 'sign-in',
    }
  },
  methods: {
    toggleState() {
      //one line conditional statement
      this.method === 'sign-in'
        ? (this.method = 'sign-up')
        : (this.method = 'sign-in')
    },
  },
  computed: {
    signMEthod() {
      let myMethod = this.method === 'sign-in' ? 'Signup' : 'Login'
      return myMethod
    },
  },
}
</script>

<style></style>
