<template>
  <form
    @submit.prevent="handleSignUp"
    class="flex flex-col items-center justify-between h-96 mt-12"
  >
    <BaseInput
      placeholder="username"
      :value="userData.username"
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
  methods: {
    handleSignUp() {
      console.log(this.email, this.password)
    },
  },
}
</script>

<style></style>
