<template>
  <form @submit.prevent="onSubmit" class="space-y-6">
    <InputGroup label="Email Address" type="email" placeholder="Email Address">
      <template v-slot>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l-4-4m4 4l-4 4m8 0h8m-8 0l4-4m-4 4l4-4"></path>
      </template>
    </InputGroup>
    <Button>Enter</Button>
  </form>
</template>

<script>
import InputGroup from '../molecules/InputGroup.vue';
import Button from '../atoms/Button.vue';

export default {
  name: 'LoginForm',
  components: { InputGroup, Button },
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>
