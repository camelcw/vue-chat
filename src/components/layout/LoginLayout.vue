<template>
  <div class="flex flex-col w-full h-full">
    <Header :is-auth="$store.state.isAuth"/>
    <section>
      <h2>Онлайн чат</h2>
    </section>
  </div>

</template>

<script>
import Header from "@/components/layout/header/Header";

export default {
  name: "LoginLayout",
  components: {Header}
}
</script>

<style scoped>

</style>