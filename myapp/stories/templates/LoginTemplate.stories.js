// stories/templates/LoginTemplate.stories.js
import LoginTemplate from './LoginTemplate.vue';

export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
};

const Template = (args) => ({
  components: { LoginTemplate },
  setup() {
    return { args };
  },
  template: '<LoginTemplate v-bind="args" />',
});

export const Default = Template.bind({});
