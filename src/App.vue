<template>
  <form class="flex flex-wrap w-full max-w-xs mb-10 items-center justify-center text-center">
    <h3 class="mb-3 font-bold uppercase">Создание поста</h3>
    <input
      v-bind:value="title"
      @input="this.title = $event.target.value"
      class="mb-5 border rounded-md px-3 py-2 w-full"
      placeholder="Название"
      type="text"
    />
    <input
      v-bind:value="body"
      @input="this.body = $event.target.value"
      class="mb-5 border rounded-md px-3 py-2 w-full"
      placeholder="Описание"
      type="text"
    />
    <button class="w-full border border-black rounded-md p-2">Создать пост</button>
  </form>
  <div class="mb-3 border-2 border-red-600 p-2 rounded-md" v-for="post in posts">
    <div>
      <strong>Название:</strong>
      <div>{{ post.title }}</div>
    </div>
    <div>
      <strong>Описание:</strong>
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
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
      title: '',
      body: '',
    }
  },
  methods: {
  },
}
</script>

<style></style>
