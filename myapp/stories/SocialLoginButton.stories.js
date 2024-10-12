// stories/SocialLoginButton.stories.js
import SocialLoginButton from '../components/molecules/SocialLoginButton.vue';

export default {
  title: 'Molecules/SocialLoginButton',
  component: SocialLoginButton,
};

export const GoogleButton = () => ({
  components: { SocialLoginButton },
  template: '<SocialLoginButton platform="Google" />',
});

export const FacebookButton = () => ({
  components: { SocialLoginButton },
  template: '<SocialLoginButton platform="Facebook" />',
});
