<template>
  <select :value="modelValue" class="border border-black rounded-sm px-2 text-base" @change="onChange">
    <option disabled value="">Выбрать тип сортировки</option>
    <option :value="option.value" :key="option.value" v-for="option in options">{{ option.name }}</option>
  </select>
</template>
<script>
export default {
  name: 'SelectMain',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    onChange(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>