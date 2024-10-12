import LoginForm from '../components/organisms/LoginForm.vue';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
};

export const Default = () => ({
  components: { LoginForm },
  template: '<LoginForm />',
});
