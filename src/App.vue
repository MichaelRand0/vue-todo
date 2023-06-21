<template>
  <div>
    <ButtonMain class="max-w-[250px] mb-5" @click="this.show = true">Создать пост</ButtonMain>
  </div>
  <ModalMain v-model:show="show">
    <PostForm @create="addPost" />
  </ModalMain>
  <PostList @remove="removePost" :posts="posts" />
</template>

<script>
import PostForm from './modules/PostForm'
import PostList from './modules/PostList'
import ModalMain from './shared/ModalMain.vue'
export default {
  components: {
    PostForm,
    PostList,
    ModalMain,
},
  data() {
    return {
      posts: [
        {
          id: '1',
          title: 'JavaScript',
          body: 'Язык Программирования',
        },
        {
          id: '2',
          title: 'Vue.js',
          body: 'Фреймворк',
        },
        {
          id: '3',
          title: 'Tailwindcss',
          body: 'CSS-Фреймворк',
        },
      ],
      show: false
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
      this.show = false
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    }
  },
}
</script>

<style></style>
