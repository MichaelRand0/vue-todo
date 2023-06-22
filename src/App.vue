<template>
  <div>
    <div v-if="$store.state.auth.user" class="fixed right-3 bottom-3 bg-black text-lg text-white font-bold p-2 opacity-75">
      <div>Пользователь: {{ $store.state.auth.user }}</div>
      <button class="border-b-2 border-b-red-600" @click="$store.commit('logout')">Выйти</button>  
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    '$store.state.auth.user': function () {
      const user = this.$store.state.auth.user
      user ? this.$router.push('/') : !user ? this.$router.push('/auth') : ''
    },
  },
  mounted() {
    const user = localStorage.getItem('user')
    if (user) {
      this.$store.commit('setUser', user)
      console.log('user mounted', user)
    } else {
      this.$router.push('/auth')
    }
  },
}
</script>
<style></style>
