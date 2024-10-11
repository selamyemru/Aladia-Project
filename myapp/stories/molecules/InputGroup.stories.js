// stories/molecules/InputGroup.stories.js
import InputGroup from '../molecules/InputGroupField.vue';

export default {
  title: 'Molecules/InputGroup',
  component: InputGroup,
};

const Template = (args) => ({
  components: { InputGroup },
  setup() {
    return { args };
  },
  template: '<InputGroup v-bind="args" />',
});

export const Default = Template.bind({});
