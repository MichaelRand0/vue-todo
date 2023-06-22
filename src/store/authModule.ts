
export default {
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('user')
    }
  },
}
