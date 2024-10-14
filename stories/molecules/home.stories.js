import Hero from "../../components/molecules/hero.vue";

const meta = {
  title: "molecules/Home",
  component: Hero,
  argTypes: {
    title: {
      control: "text",
      description: "Title text displayed in the Hero component",
    },
    subtitle: {
      control: "text",
      description: "Subtitle text displayed in the Hero component",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Hero component that displays an image, title, and subtitle with a gradient background.",
      },
    },
  },
};

export default meta;
export const Default = {
  args: {
    title: "Welcome to Aladia,",
    subtitle: "Create or access your account from here",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default Hero component with default title, subtitle, and image.",
    },
  },
};

/** Custom Titles */
export const CustomTitles = {
  args: {
    title: "Discover New Horizons",
    subtitle: "Join us on an exciting journey",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component with custom title and subtitle.",
    },
  },
};

export const LongText = {
  args: {
    title: "Welcome to Aladia, the platform that empowers you to achieve more",
    subtitle:
      "Create or access your account from here and explore the multitude of features we offer to enhance your productivity and collaboration.",
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `<Hero v-bind="args" />`,
  }),
  parameters: {
    docs: {
      storyDescription: "Hero component with long title and subtitle texts.",
    },
  },
};
