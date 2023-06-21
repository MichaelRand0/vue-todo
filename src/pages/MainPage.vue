<template>
  <div class="text-center">
    <h1 class="mb-5 text-3xl text-red-600 font-bold">Todo-List на Vue 3!</h1>
    <h4 class="text-2xl font-bold">Что реализовано в проекте:</h4>
    <ul class="text-lg">
      <li><span class="text-xl text-green-600 font-bold">1.</span>Роутинг</li>
      <li><span class="text-xl text-green-600 font-bold">2.</span>Работа с API</li>
      <li>
        <span class="text-xl text-green-600 font-bold">3.</span>Работа с жизненным циклом приложения
      </li>
      <li>
        <span class="text-xl text-green-600 font-bold">4.</span>Работа со store через
        <span class="text-xl text-green-600 font-bold">VueX</span>
      </li>
    </ul>
    <h4 class="text-2xl font-bold">На что лучше не стоит обращать внимание:</h4>
    <ul class="text-lg mb-10">
      <li>
        <span class="text-xl text-blue-600 font-bold">1.</span> На верстку. Цель данного проекта
        изучить основы <span class="text-xl text-green-600 font-bold">Vue</span> в сжатые сроки и
        как можно быстрее сделать тестовое задание =))
      </li>
      <li>
        <span class="text-xl text-blue-600 font-bold">2.</span> На различные подходы в контексте
        самого <span class="text-xl text-green-600 font-bold">Vue</span>. Я изучил
        <span class="text-xl text-green-600 font-bold">Vue</span> за пару суток, и в основном руководствовался
        только опытом работы с <span class="text-xl text-blue-600 font-bold">React</span>
      </li>
    </ul>
    <LinkMain to="/posts">Перейти к Todo-List!</LinkMain>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
