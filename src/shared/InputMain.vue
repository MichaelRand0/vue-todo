<template>
  <input
    class="mb-5 border border-black rounded-md px-3 py-2 w-full"
    type="text"
    :value="modelValue"
    @input="updateModel"
  />
</template>
<script>
export default {
  name: 'InputMain',
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    updateModel(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
<style></style>
