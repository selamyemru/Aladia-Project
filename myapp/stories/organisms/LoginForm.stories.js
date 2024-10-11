// stories/organisms/LoginForm.stories.js
import LoginForm from './LoginForm.vue';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
};

const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: '<LoginForm v-bind="args" />',
});

export const Default = Template.bind({});
