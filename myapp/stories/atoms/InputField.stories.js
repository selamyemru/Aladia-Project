// stories/atoms/InputField.stories.js
import InputField from '../atoms/InputField.vue';

export default {
  title: 'Atoms/InputField',
  component: InputField,
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Email Address' },
  },
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Email Address',
};
