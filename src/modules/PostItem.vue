<template>
  <div class="mb-3 border-2 border-red-600 p-2 rounded-md last:mb-0">
    <div>
      <strong>Название:</strong>
      <div>{{ post.title }}</div>
    </div>
    <div>
      <strong>Описание:</strong>
      <div>{{ post.body }}</div>
    </div>
    <div class="max-w-[200px] ml-auto">
      <ButtonMain @click="removePost">Удалить</ButtonMain>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removePost() {
      this.$emit('remove', this.post)
    }
  }
}
</script>
<style></style>
