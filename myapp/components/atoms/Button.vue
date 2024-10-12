<!-- <template>
  <button
    :class="`w-full py-3 rounded-lg font-medium transition duration-300 ${bgColor} ${textColor} ${hoverColor} ${additionalClasses}`"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    bgColor: { 
      type: String, 
      default: 'bg-indigo-600' 
    },
    textColor: { 
      type: String, 
      default: 'text-white' 
    },
    hoverColor: { 
      type: String, 
      default: 'hover:bg-indigo-700' 
    },
    additionalClasses: { 
      type: String, 
      default: '' 
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
</style> -->
<template>
  <button :class="buttonClass" @click="onClick">{{ label }}</button>
</template>

<script>
/**
 * Button component for user interaction.
 *
 * @component
 * @param {String} label - The text to display inside the button.
 * @param {String} type - The type of the button (default is "button").
 * @emit click - Emitted when the button is clicked.
 */
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Click Me',
      description: 'The text to display inside the button',
    },
    type: {
      type: String,
      default: 'button',
      description: 'The type of the button (e.g., submit, button)',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
