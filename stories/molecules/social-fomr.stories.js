import SocialButton from "../../components/molecules/social-button.vue";

const meta = {
  title: "molecules/SocialButton",
  component: SocialButton,
  argTypes: {
    iconSrc: {
      control: "text",
      description: "URL or path of the icon displayed on the button",
    },
    label: {
      control: "text",
      description: "Text label displayed next to the icon",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with an icon and a label. The icon can be customized via props, making it versatile for different use cases like social media login buttons.",
      },
    },
  },
};

export default meta;
export const Default = {
  args: {
    iconSrc: "../../assets/img/google-logo.png",
    label: "Default Button",
  },
  parameters: {
    docs: {
      storyDescription:
        "The default icon button with a placeholder Google icon and a label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

export const AppleButton = {
  args: {
    iconSrc: "../../assets/img/google-logo.png",
    label: "Sign in with Apple",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Apple sign-in with the locally imported Apple logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton  class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

export const FacebookButton = {
  args: {
    iconSrc: "../../assets/img/apple-logo.png",
    label: "Continue with Facebook",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Facebook login, displaying the locally imported Facebook logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton  class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};

export const GoogleButton = {
  args: {
    iconSrc: "../../assets/img/google-logo.png",
    label: "Sign in with Google",
  },
  parameters: {
    docs: {
      storyDescription:
        "A button styled for Google sign-in, featuring the locally imported Google logo and label.",
    },
  },
  render: (args) => ({
    components: { SocialButton },
    setup() {
      return { args };
    },
    template: `<SocialButton class="bg-black max-w-sm" :iconSrc="args.iconSrc" :label="args.label" @click="args.onClick" />`,
  }),
};
