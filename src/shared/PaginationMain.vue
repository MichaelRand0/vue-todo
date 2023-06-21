<template>
  <div>
    <button
      @click="changePage(page)"
      :class="{ 'bg-gray-600 text-white': page === this.currentPage }"
      class="px-2 py-1 hover:bg-gray-600 transition duration-75 hover:text-white border border-black"
      :key="page"
      v-for="page in modelValue"
    >
      {{ page }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'PaginationMain',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('update:currentPage', page)
    },
  },
}
</script>
<style></style>
