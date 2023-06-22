<template>
  <div>
    <InputMain v-model="searchValue" placeholder="Поиск" />
    <div>
      <ButtonMain class="max-w-[250px] mb-5 mr-5" @click="this.show = true">
        Создать дело
      </ButtonMain>
      <SelectMain :options="sortOptions" v-model="selectedSort" />
    </div>
    <ModalMain v-model:show="show">
      <PostForm @create="addPost" />
    </ModalMain>
    <h3 class="mb-5 text-xl font-bold">СПИСОК ДЕЛ</h3>
    <h4 class="text-red-500 font-bold" v-if="isLoading">Идет загрузка дел...</h4>
    <PostList
      class="mb-5 max-h-[500px] h-full overflow-auto"
      v-else
      @remove="removePost"
      :posts="searchedAndSortedPosts"
    />
    <div class="flex items-center justify-between">
      <LinkMain class="" to="/">Вернуться на главную</LinkMain>
    </div>
  </div>
</template>

<script>
import PostForm from '.././modules/PostForm'
import PostList from '.././modules/PostList'

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      show: false,
      isLoading: false,
      selectedSort: '',
      searchValue: '',
      sortOptions: [
        {
          value: 'title',
          name: 'По названию',
        },
        {
          value: 'body',
          name: 'По содержимому',
        },
      ],
    }
  },
  computed: {
    sortedPosts() {
      return [...this.$store.state.posts.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
      )
    },
    searchedAndSortedPosts() {
      return [...this.sortedPosts].filter((post) =>
        post.title.toLowerCase().includes(this.searchValue.toLowerCase()),
      )
    },
  },
  watch: {
    '$store.state.posts.posts': function() {
      this.updatePages()
    },
  },
  mounted() {
    this.updatePages()
  },
  methods: {
    addPost(post) {
      const posts = [...this.$store.state.posts.posts, post]
      this.$store.commit('setPosts', posts)
      this.show = false
    },
    removePost(post) {
      const posts = this.$store.state.posts.posts
      const newPosts = posts.filter((item) => item.id !== post.id)
      this.$store.commit('setPosts', newPosts)
    },
    updatePages() {
      const posts = this.$store.state.posts.posts
      this.totalPages = Math.ceil(posts?.length / this.limit)
    },
    changePage(page) {
      this.page = page
    },
    // editPost(newPost) {
    //   const posts = this.$store.state.posts.posts
    //   const newPosts = posts.map(item => {
    //     if(item.id === newPost.id) {
    //       return newPost
    //     }
    //     return item
    //   })
    //   this.$store.commit('setPosts', newPosts)
    // }
  },
}
</script>

<style></style>
