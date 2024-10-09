import LoginPage from './Login.vue';

export default {
  title: 'Components/Login',
  component: LoginPage,
};

const Template = (args) => ({
  components: { LoginPage },
  setup() {
    return { args };
  },
  template: '<LoginPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // You can add default props here if your component accepts any.
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  handleSubmit: () => alert('Form submitted with alert!'), // This will override the default method.
};
