import LoginFormTemplate from '../components/templates/LoginFormTemplate.vue';

export default {
  title: 'Templates/LoginFormTemplate',
  component: LoginFormTemplate,
};

export const Default = () => ({
  components: {LoginFormTemplate },
  template: '<LoginFormTemplate />',
});
