<template>
  <div
    v-if="show"
    @click="hideModal"
    class="left-0 top-0 fixed w-full h-full bg-[#000000da] flex items-center justify-center"
  >
    <div @click.stop class="bg-white p-5 rounded-md">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalMain',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    alwaysShow: {
      type: Boolean,
      default: () => false
    },
  },
  methods: {
    hideModal() {
      if(!this.alwaysShow) {
        this.$emit('update:show', false)
      }
    },
  },
}
</script>
