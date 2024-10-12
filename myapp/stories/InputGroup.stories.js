import InputGroup from '../components/molecules/InputGroup.vue';

export default {
  title: 'Molecules/InputGroup',
  component: InputGroup,
};

export const EmailFormGroup = () => ({
  components: { InputGroup },
  template: `
    <FormGroup label="Email Address">
      <Input type="email" placeholder="Email Address" />
    </FormGroup>
  `,
});
