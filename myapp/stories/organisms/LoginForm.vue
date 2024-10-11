<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <InputGroupField 
      label="Email Address" 
      type="email" 
      placeholder="Enter your email" 
      v-model="email"
    />
    <Button type="submit">Enter</Button>
  </form>
</template>

<script>
import InputGroupField from '../molecules/InputGroupField.vue'
import Button from '../atoms/Button.vue'

export default {
  name: 'LoginForm',
  components: {
    InputGroupField,
    Button,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    handleSubmit() {
      alert(`Email submitted: ${this.email}`);
    },
  },
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
</style>
