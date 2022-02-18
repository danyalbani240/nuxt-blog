<template>
  <form
    @submit.prevent="handleSignUp"
    class="flex flex-col items-center justify-between h-96 mt-12"
  >
    <BaseInput
      placeholder="username"
      :value="username"
      @input="username = $event"
      label="username"
    />
    <BaseInput
      :value="userData.email"
      @input="userData.email = $event"
      placeholder="example@email.com"
      :type="'email'"
      label="email"
    />
    <BaseInput
      :value="userData.password"
      @input="userData.password = $event"
      :type="'password'"
      label="password"
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
      this.$store
        .dispatch('signUp', this.userData)
        .then((res) => console.log(res))
    },
  },
}
</script>

<style></style>
