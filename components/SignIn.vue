<template>
  <form
    @submit.prevent="handleSignIn"
    class="flex flex-col items-center justify-between h-80 mt-12"
  >
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
    <BaseButton> LogIn </BaseButton>
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
      userData: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    handleSignIn() {
      console.log(this.userData)
      this.$store
        .dispatch('signIn', this.userData)
        .then((result) => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
