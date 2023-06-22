<template>
  <div>
    <InputMain v-model="searchValue" placeholder="Поиск" />
    <div>
      <ButtonMain class="max-w-[250px] mb-5 mr-5" @click="this.show = true">
        Создать пост
      </ButtonMain>
      <SelectMain :options="sortOptions" v-model="selectedSort" />
    </div>
    <ModalMain v-model:show="show">
      <PostForm @create="addPost" />
    </ModalMain>
    <h3 class="mb-5 text-xl font-bold">POSTS</h3>
    <h4 class="text-red-500 font-bold" v-if="isLoading">Идет загрузка постов...</h4>
    <PostList
      class="mb-5 max-h-[500px] h-full overflow-auto"
      v-else
      @remove="removePost"
      :posts="searchedAndSortedPosts"
    />
    <div class="flex items-center justify-between">
      <PaginationMain v-model:currentPage="page" v-model="totalPages" />
      <LinkMain class="" to="/">Вернуться на главную</LinkMain>
    </div>
  </div>
</template>

<script>
import PostForm from '.././modules/PostForm'
import PostList from '.././modules/PostList'
import axios from 'axios'

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
      page: 1,
      totalPages: 0,
      limit: 10,
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
      return [...this.posts].sort((a, b) =>
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
    async page() {
      const posts = await this.getPosts()
      this.posts = posts
    },
  },
  async mounted() {
    const posts = await this.getPosts()
    this.posts = posts
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
      this.show = false
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id)
    },
    async getPosts() {
      this.isLoading = true
      const response = await axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        .catch((err) => alert('Error!!!:', err))
        .finally(() => (this.isLoading = false))
      this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      return response.data
    },
    changePage(page) {
      this.page = page
    },
  },
}
</script>

<style></style>
