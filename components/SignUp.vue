<template>
  <form
    @submit.prevent="handleSignUp"
    class="flex flex-col items-center justify-between h-96 mt-12"
  >
    <BaseInput
      placeholder="username"
      :value="username"
      @input="userData.username = $event"
    />
    <BaseInput
      :value="userData.email"
      @input="userData.email = $event"
      placeholder="example@email.com"
      :type="'email'"
    />
    <BaseInput
      :value="userData.password"
      @input="userData.password = $event"
      :type="'password'"
      placeholder="password"
    />
    <BaseButton> Submit </BaseButton>
  </form>
</template>

<script>
import BaseInput from '~/components/Base/AppInput.vue'
import BaseButton from '~/components/Base/AppButton.vue'
import axios from 'axios'
export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      username: '',
      userData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleSignUp() {
      this.$store.dispatch('signUp', this.userData)
    },
  },
}
</script>

<style></style>
