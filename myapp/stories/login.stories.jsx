
import Login from '../components/Login.vue'; 

export default {
  title: 'Login', 
  component: Login, 
};

const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<LoginPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
};

export const WithError = Template.bind({});
WithError.args = {
};

