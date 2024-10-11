<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <InputField 
      :type="type" 
      :placeholder="placeholder" 
      v-model="inputValue" 
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import InputField from '../atoms/InputField.vue';

export default {
  name: 'InputGroupField',
  components: {
    InputField
  },
  props: {
    label: String,
    type: String,
    placeholder: String,
    value: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style scoped>
.input-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
