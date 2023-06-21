<template>
  <div>
    <h3 class="mb-5 text-xl font-bold">POSTS</h3>
    <div v-if="posts.length > 0">
      <PostItem :key="post.id" @remove="$emit('remove', post)" v-for="post in posts" :post="post" />
    </div>
    <h4 v-else class="text-red-600 font-bold text-lg">Список постов пуст...</h4>
  </div>
</template>
<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
