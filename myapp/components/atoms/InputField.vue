<template>
  <div class="relative w-full">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <slot name="icon"></slot>
    </span>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="`w-full px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out ${inputSize}`"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: 'Input' },
    inputSize: { type: String, default: 'text-base' }, 
  },
};
</script>
