<template>
  <div>
    <h3 class="mb-5 text-xl font-bold">POSTS</h3>
    <PostItem v-if="posts.length > 0" :key="post.id" @remove="$emit('remove', post)" v-for="post in posts" :post="post" />
    <h4 class="text-red-600 font-bold text-lg" v-else>Список постов пуст...</h4>
  </div>
</template>
<script>
import PostItem from './PostItem.vue'
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
}
</script>
