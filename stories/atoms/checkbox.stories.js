// import checkbox
import checkbox from "../../components/atoms/checkbox.vue";
import { ref } from "vue";

const meta = {
  title: "atoms/checkbox",
  component: checkbox,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Indicates whether the checkbox is checked.",
    },
    disabled: {
      control: "boolean",
      description: "Indicates whether the checkbox is disabled.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A simple checkbox component that can be used to select or deselect an option.",
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    components: { checkbox },
    setup() {
      const isChecked = ref(args.checked);
      return { args, isChecked };
    },
    template: `
      <div>
        <label>
          <checkbox v-model="isChecked" v-bind="args" />
          Default checkbox
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "A default checkbox that is unchecked.",
    },
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
  },
  render: (args) => ({
    components: { checkbox },
    setup() {
      const isChecked = ref(args.checked);
      return { args, isChecked };
    },
    template: `
      <div>
        <label>
          <checkbox v-model="isChecked" v-bind="args" />
          Checked checkbox
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "A checkbox that is initially checked.",
    },
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => ({
    components: { checkbox },
    setup() {
      const isChecked = ref(args.checked);
      return { args, isChecked };
    },
    template: `
      <div>
        <label>
          <checkbox v-model="isChecked" v-bind="args" />
          Disabled checkbox
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "A checkbox that is disabled and cannot be checked.",
    },
  },
};

export const CheckedDisabled = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => ({
    components: { checkbox },
    setup() {
      const isChecked = ref(args.checked);
      return { args, isChecked };
    },
    template: `
      <div>
        <label>
          <checkbox v-model="isChecked" v-bind="args" />
          Checked and Disabled checkbox
        </label>
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "A checkbox that is both checked and disabled.",
    },
  },
};
