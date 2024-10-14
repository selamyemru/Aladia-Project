<template>
  <div class="flex flex-col w-full">
    <div
      class="group relative flex w-full rounded transition-all"
      :class="[
        sizeClass,
        touched && !isValid
          ? 'bg-red-50 border border-red-500'
          : 'bg-white border border-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
      ]"
    >
      <div
        v-if="icon"
        class="flex items-center justify-center text-xl text-black pl-2"
      >
        <font-awesome-icon :icon="icon" class="text-base text-black/70" />
      </div>
      <input
        :id="inputId"
        :value="modelValue"
        @input="handleInput"
        @focus="handleFocus"
        :placeholder="floating ? ' ' : placeholder"
        :disabled="disabled"
        :type="inputType"
        :class="[ 
          'h-full flex-1 rounded bg-transparent text-sm outline-none transition-colors px-2',
          sizeClass,
          touched && !isValid ? 'text-red-500' : 'text-black',
        ]"
        :aria-labelledby="label ? inputId + '-label' : null"
      />
      <label
        v-if="floating && label"
        :for="inputId"
        class="absolute left-2 transition-all pointer-events-none"
        :class="[
          'text-gray-500 text-xs',
          touched || modelValue ? '-translate-y-5 scale-75' : 'top-1/2 -translate-y-1/2',
          touched && !isValid ? 'text-red-500' : '',
        ]"
      >
        {{ label }}
      </label>
      <div
        v-if="type === 'password'"
        class="flex items-center justify-center cursor-pointer text-xl text-black/50 pr-2"
        @click="toggleVisibility"
      >
        <font-awesome-icon
          :icon="inputType === 'password' ? ['fas', 'eye'] : ['fas', 'eye-slash']"
        />
      </div>
    </div>
    <div
      v-if="touched && !isValid && errorMessage"
      class="text-red-500 text-xs mt-1"
    >
      {{ errorMessage }}
    </div>
    <div v-if="helpText" class="text-gray-400 text-xs mt-1">
      {{ helpText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Enter value",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
    helpText: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
    floating: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputType: this.type,
      touched: false,
    };
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "h-8 text-xs";
        case "lg":
          return "h-12 text-lg";
        default:
          return "h-10 text-sm";
      }
    },
  },
  methods: {
    toggleVisibility() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    handleFocus() {
      this.touched = true;
    },
  },
  watch: {
    type(val) {
      this.inputType = val;
    },
  },
};
</script>

<style scoped>
/* Scoped styles for floating label transitions */
input:focus + label,
input:not(:placeholder-shown) + label {
  transform: translateY(-1.25rem) scale(0.75);
}
</style>
