<template>
  <div>
    <div>
      <ButtonMain class="max-w-[250px] mb-5 mr-5" @click="this.show = true">Создать пост</ButtonMain>
      <SelectMain :options="sortOptions" v-model="selectedSort" />
    </div>
    <ModalMain v-model:show="show">
      <PostForm @create="addPost" />
    </ModalMain>
    <h4 class="text-red-500 font-bold" v-if="isLoading">Идет загрузка постов...</h4>
    <PostList v-else @remove="removePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from './modules/PostForm'
import PostList from './modules/PostList'
import ModalMain from './shared/ModalMain.vue'
import axios from 'axios'

export default {
  components: {
    PostForm,
    PostList,
    ModalMain,
  },
  data() {
    return {
      posts: [],
      show: false,
      isLoading: false,
      selectedSort: '',
      sortOptions: [
        {
          value: 'title',
          name: 'По названию'
        },
        {
          value: 'body',
          name: 'По содержимому'
        },
      ]
    }
  },
  watch: {
    selectedSort(val) {
      this.posts = this.posts.sort((a, b) => {
        return a[val].localeCompare(b[val])
      })
    }
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
        .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .catch((err) => alert('Error!!!:', err))
        .finally(() => (this.isLoading = false))
      return response.data
    },
  },
}
</script>

<style></style>
