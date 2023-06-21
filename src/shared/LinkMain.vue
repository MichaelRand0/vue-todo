<template>
  <router-link class="text-3xl font-bold text-red-600 border-b-2 pb-1 border-b-blue-500 hover:border-b-transparent" :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  name: 'LinkMain',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
  
</style>