<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <slot name="icon"></slot>
    </span>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="`w-full px-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`"
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
  },
};
</script>
