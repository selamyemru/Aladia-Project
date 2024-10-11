// InputField.stories.js
import InputField from './InputField.vue';

export default {
  title: 'Atoms/InputField',
  component: InputField,
};

export const Default = () => ({
  components: { InputField },
  template: '<InputField placeholder="Enter text" />',
});

export const Email = () => ({
  components: { InputField },
  template: '<InputField type="email" placeholder="Enter your email" />',
});
