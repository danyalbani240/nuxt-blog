<template>
  <div>
    <div class="flex">
      <input type="text" placeholder="enter user id" v-model="userId" />
      <button @click="goTo">click</button>
    </div>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '',
    }
  },
  methods: {
    goTo() {
      if(this.$route.name == 'users-id'){
          this.$router.push(this.userId)
      }else{
          this.$router.push(`users/${this.userId}`)
      }
    },
  },
}
</script>
