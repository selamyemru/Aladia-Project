<template>
  <div class="input-group w-full max-w-sm mx-auto p-4">
    <label :for="label" class="sr-only">{{ label }}</label>
    <InputField :type="type" :placeholder="placeholder">
      <template v-slot:icon>
        <Icon class="w-5 h-5 text-gray-400"><slot></slot></Icon>
      </template>
    </InputField>
  </div>
</template>

<script>
import InputField from '../atoms/InputField.vue';
import Icon from '../atoms/Icon.vue';

export default {
  name: 'InputGroup',
  components: { InputField, Icon },
  props: {
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: 'Input' },
  },
};
</script>

<style scoped>
.input-group {
  max-width: 400px;
}
</style>
