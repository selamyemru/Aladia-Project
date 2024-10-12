<template>
  <svg
    :class="`w-${size} h-${size} text-${color}`"
    :stroke-width="strokeWidth"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <slot>
    </slot>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    size: {
      type: String,
      default: '5', 
    },
    color: {
      type: String,
      default: 'gray-400',
    },
    strokeWidth: {
      type: [String, Number],
      default: 2,
    },
  },
};
</script>
