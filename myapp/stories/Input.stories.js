import InputField from '../components/atoms/InputField.vue';

export default {
  title: 'Atoms/InputField',
  component: InputField,
};

export const EmailInput = () => ({
  components: { InputField },
  template: '<Input type="email" placeholder="Email Address" />',
});
