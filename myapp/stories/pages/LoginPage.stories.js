// stories/pages/LoginPage.stories.js
import LoginPage from './LoginPage.vue';

export default {
  title: 'Pages/LoginPage',
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
