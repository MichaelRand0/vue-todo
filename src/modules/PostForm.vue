<template>
  <form
    @submit.prevent
    class="flex flex-wrap w-full max-w-xs mb-10 items-center justify-center text-center"
  >
    <h3 class="mb-3 font-bold uppercase">Создание поста</h3>
    <InputMain
      v-focus
      v-model="post.title"
      placeholder="Название"
      type="text"
    />
    <InputMain
      v-model="post.body"
      placeholder="Описание"
      type="text"
    />
    <ButtonMain @click="addPost">Создать пост</ButtonMain>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        id: Date.now(),
        title: '',
        body: '',
      },
    }
  },
  methods: {
    addPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  }
}
</script>
<style></style>
