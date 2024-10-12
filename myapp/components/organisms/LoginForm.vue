<template>
  <form @submit.prevent="onSubmit" class="space-y-6 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <InputGroup label="Email Address" type="email" placeholder="Email Address">
      <template v-slot:icon>
        <!-- Example Icon (you can use any valid SVG icon) -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m0 0l-4-4m4 4l-4 4m8 0h8m-8 0l4-4m-4 4l4-4" />
        </svg>
      </template>
    </InputGroup>
    <Button class="w-full bg-indigo-600 text-white py-3 hover:bg-indigo-700 transition duration-300 ease-in-out rounded-lg font-semibold">
      Enter
    </Button>
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

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}
</style>
