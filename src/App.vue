<template>
  <PostForm @create="addPost" />
  <PostList @remove="removePost" :posts="posts" />
</template>

<script>
import PostForm from './components/PostForm'
import PostList from './components/PostList'
export default {
  components: {
    PostForm, PostList
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
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    }
  },
}
</script>

<style></style>
