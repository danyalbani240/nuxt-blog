<template>
  <form @submit.prevent="handleSignUp">
    <BaseInput placeholder="username" />
    <BaseInput
      placeholder="example@email.com"
      :type="'email'"
      :value="userData.email"
    />
    <BaseInput
      :value="userData.password"
      :type="'password'"
      placeholder="password"
    />
    <BaseButton> Submit </BaseButton>
  </form>
</template>

<script>
import BaseInput from '~/components/Base/AppInput.vue'
import BaseButton from '~/components/Base/AppButton.vue'
export default {
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
}
</script>

<style></style>
