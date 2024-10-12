import LoginPage from '../components/pages/LoginPage.vue';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
};

export const Default = () => ({
  components: { LoginPage },
  template: '<LoginPage />',
});
