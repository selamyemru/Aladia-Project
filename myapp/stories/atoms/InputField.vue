<template>
  <div>
    <label :for="id" class="sr-only">{{ label }}</label>
    <input 
      :id="id" 
      :type="type" 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      class="input-field"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: String,
    id: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    modelValue: String, 
  },
}
</script>

<style scoped>
.input-field {
  
}
</style>
