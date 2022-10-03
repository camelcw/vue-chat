<template>
  <header class="flex justify-between items-center flex-row w-full h-1/6  bg-teal-300 pl-2 pr-2">
    <router-link
        class="inline-block text-2xl sm:text-1xl font-extrabold text-purple-800 tracking-tight"
        to="/">
      Vue chat
    </router-link>
    <vm-button
        v-if="isAuth"
        class="m-2.5" @click="logOutAndRedirect">SingOut
    </vm-button
    >
    <vm-button
        v-else
        class="m-2.5" @click="loginAndRedirect">Login
    </vm-button
    >

  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isAuth: Boolean,
  },

  methods: {
    loginAndRedirect() {
      this.$store.commit('Login')
      this.$router.push('/chat')


    },
    logOutAndRedirect() {
      this.$store.commit('LogOut')
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped>

</style>