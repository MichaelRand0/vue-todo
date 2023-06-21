<template>
  <div class="overflow-x-hidden">
    <transition-group name="list" v-if="posts.length > 0">
      <PostItem
        class="list-item w-full"
        :key="post.id"
        @remove="$emit('remove', post)"
        v-for="post in posts"
        :post="post"
      />
    </transition-group>
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
<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
  list-style: none;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(120px);
}
.list-move {
  transition: transform 0.4s;
}
</style>
