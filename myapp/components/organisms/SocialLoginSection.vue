<template>
  <div class="social-login-buttons space-y-4">
    <SocialLoginButton iconSrc="/assets/images/google-icon.jpeg" iconAlt="Google icon" label="Continue with Google" />
    <SocialLoginButton iconSrc="/assets/images/facebook-icon.png" iconAlt="Facebook icon" label="Continue with Facebook" />
    <SocialLoginButton iconSrc="/assets/images/apple-icon.jpeg" iconAlt="Apple icon" label="Continue with Apple" />
  </div>
</template>

<script>
import SocialLoginButton from '../molecules/SocialLoginButton.vue';

export default {
  name: 'SocialLoginSection',
  components: { SocialLoginButton },
};
</script>
