<template>
  <LoginFormTemplate>
    <div class="login-header text-center">
      <img src="/assets/images/logo.jpeg" alt="Aladia logo" class="logo mx-auto w-20 h-20" />
      <h1 class="login-title text-2xl font-bold text-gray-900 mt-4">Welcome to Aladia!</h1>
      <p class="login-subtitle text-gray-500 mt-2">Create or access your account from here</p>
    </div>

    <LoginForm @submit="handleSubmit" />

    <div class="separator flex items-center justify-center my-6">
      <span class="line flex-grow h-px bg-gray-300"></span>
      <span class="or-text px-4 text-gray-500">Or</span>
      <span class="line flex-grow h-px bg-gray-300"></span>
    </div>

    <SocialLoginSection />
    
    <p class="terms text-center text-gray-500 text-sm mt-6">
      <a href="#" class="terms-link text-indigo-600 hover:underline">Terms & Conditions</a>
    </p>
  </LoginFormTemplate>
</template>

<script>
import LoginFormTemplate from '../templates/LoginFormTemplate.vue';
import LoginForm from '../organisms/LoginForm.vue';
import SocialLoginSection from '../organisms/SocialLoginSection.vue';

export default {
  name: 'LoginPage',
  components: { LoginFormTemplate, LoginForm, SocialLoginSection },
  methods: {
    handleSubmit() {
      alert('Form submitted!');
    },
  },
};
</script>
