export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
  },
}
