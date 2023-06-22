<template>
  <div class="mb-3 border-2 border-red-600 p-2 rounded-md last:mb-0">
    <form @submit.prevent>
      <div>
        <div class="mb-1"><strong>Название:</strong></div>
        <div v-if="!isEdit">{{ post.title }}</div>
        <InputMain v-else class="w-[150px] !p-1" v-model="title" placeholder="Название" />
      </div>
      <div>
        <div class="mb-1"><strong>Описание:</strong></div>
        <div v-if="!isEdit">{{ post.body }}</div>
        <InputMain v-else class="w-[150px] !p-1" v-model="body" placeholder="Описание" />
      </div>
      <div v-if="isEdit" class="max-w-[400px] ml-auto flex">
        <ButtonMain class="mr-3" @click="editPost">Сохранить</ButtonMain>
        <ButtonMain @click="this.isEdit = false">Отменить</ButtonMain>
      </div>
      <div v-else class="max-w-[400px] ml-auto flex">
        <ButtonMain class="mr-3" @click="this.isEdit = true">Редактировать</ButtonMain>
        <ButtonMain @click="removePost">Удалить</ButtonMain>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.post.title,
      body: this.post.body,
      isEdit: false,
    }
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removePost() {
      this.$emit('remove', this.post)
    },
    editPost() {
      const newPost = {
        id: this.post.id,
        title: this.title,
        body: this.body,
      }
      const posts = this.$store.state.posts.posts
      const newPosts = posts.map((item) => {
        if (item.id === newPost.id) {
          return newPost
        }
        return item
      })
      this.$store.commit('setPosts', newPosts)
      this.isEdit = false
    },
  },
}
</script>
<style></style>
