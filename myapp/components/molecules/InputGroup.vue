<template>
  <div class="input-group">
    <label :for="label" class="sr-only">{{ label }}</label>
    <InputField :type="type" :placeholder="placeholder">
      <template v-slot:icon>
        <Icon><slot></slot></Icon>
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
