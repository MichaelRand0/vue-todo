<template>
  <div>
    <ModalMain :alwaysShow="true" v-model:show="show">
      <form @submit.prevent>
        <InputMain v-model="value" placeholder="Логин" />
        <ButtonMain @click="login" class="mb-5">Войти</ButtonMain>
        <ButtonMain @click="signUp">Создать аккаунт</ButtonMain>
      </form>
    </ModalMain>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      value: '',
    }
  },
  watch: {
    '$store.state.auth.user': function () {
      const user = this.$store.state.auth.user
      user ? this.$router.push('/') : ''
    },
  },
  mounted() {
    const user = this.$store.state.auth.user
    user ? this.$router.push('/') : ''
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users')) ?? []
      const isUserExists = users?.includes(this.value)
      if (isUserExists) {
        localStorage.setItem('user', this.value)
        this.$store.commit('setUser', this.value)
      } else {
        alert('Пользователь не существует')
      }
    },
    signUp() {
      const users = JSON.parse(localStorage.getItem('users')) ?? []
      const isUserExists = users?.includes(this.value)
      if (isUserExists) {
        alert('Пользователь уже существует')
      } else {
        localStorage.setItem('users', JSON.stringify([...users, this.value]))
        localStorage.setItem('user', this.value)
        this.$store.commit('setUser', this.value)
        this.value = ''
      }
    },
  },
}
</script>
