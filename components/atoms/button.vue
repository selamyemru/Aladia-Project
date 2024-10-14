<template>
  <button
    :class="[
      'flex items-center justify-center gap-4 rounded border py-1.5 shadow-sm transition-all active:scale-95',
      buttonSize,
      variantClasses,
      rounded ? 'rounded-full' : '',
    ]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    variant: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "outline", "ghost"].includes(value),
    },
    severity: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["primary", "secondary", "success", "info", "warning", "help", "danger"].includes(value),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonSize() {
      return this.size === "sm"
        ? "px-3 py-1 text-sm"
        : this.size === "lg"
        ? "px-6 py-3 text-lg"
        : "px-4 py-2";
    },
    variantClasses() {
      const baseClasses = {
        solid: {
          primary: "bg-black text-white border-transparent hover:bg-gray-800",
          secondary: "bg-gray-500 text-white border-transparent hover:bg-gray-400",
          success: "bg-green-500 text-white border-transparent hover:bg-green-400",
          info: "bg-blue-500 text-white border-transparent hover:bg-blue-400",
          warning: "bg-yellow-500 text-white border-transparent hover:bg-yellow-400",
          help: "bg-purple-500 text-white border-transparent hover:bg-purple-400",
          danger: "bg-red-500 text-white border-transparent hover:bg-red-400",
        },
        outline: {
          primary: "border-black text-black hover:bg-black hover:text-white",
          secondary: "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
          success: "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
          info: "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
          warning: "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
          help: "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
          danger: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
        },
        ghost: {
          primary: "bg-transparent text-black hover:bg-black/20",
          secondary: "bg-transparent text-gray-500 hover:bg-gray-500/20",
          success: "bg-transparent text-green-500 hover:bg-green-500/20",
          info: "bg-transparent text-blue-500 hover:bg-blue-500/20",
          warning: "bg-transparent text-yellow-500 hover:bg-yellow-500/20",
          help: "bg-transparent text-purple-500 hover:bg-purple-500/20",
          danger: "bg-transparent text-red-500 hover:bg-red-500/20",
        },
      };

      return baseClasses[this.variant][this.severity];
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
