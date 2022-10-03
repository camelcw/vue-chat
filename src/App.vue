<template>
  <router-view>
    <Chat v-if="$store.state.isAuth"/>
    <Login v-else/>
  </router-view>
</template>

<script>

import Login from "@/components/pages/publicPages/login/Login";

export default {
  name: 'App',
  components: {Login},

}
</script>

<style>

</style>
