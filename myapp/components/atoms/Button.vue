<template>
  <button
    :class="`w-full py-3 rounded-lg font-medium transition duration-300 ${bgColor} ${textColor} ${hoverColor}`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    bgColor: { type: String, default: 'bg-indigo-600' },
    textColor: { type: String, default: 'text-white' },
    hoverColor: { type: String, default: 'hover:bg-indigo-700' },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
