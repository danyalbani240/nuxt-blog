<template>
  <form
    @submit.prevent="handleSignIn"
    class="flex flex-col items-center justify-between h-80 mt-12"
  >
    <BaseInput
      :value="userData.email"
      @input="userData.email = $event"
      :label="'email'"
      placeholder="example@email.com"
      :type="'email'"
    />
    <BaseInput
      :value="userData.password"
      @input="userData.password = $event"
      :label="'password'"
      :type="'password'"
      placeholder=""
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
