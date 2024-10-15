import BackToLogin from "../../components/molecules/back-to-login.vue";

const meta = {
  title: "molecules/ReturnButton",
  component: BackToLogin,
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a 'Return to Sign In' link with an accompanying icon, with a visually distinct style on hover.",
      },
    },
  },
};

export default meta;

export const Default = {
  render: () => ({
    components: { BackToLogin },
    template: `<div class="p-4 bg-gray-800 text-white"><ReturnToSignIn /></div>`,
  }),
  parameters: {
    docs: {
      storyDescription: "Default rendering of the ReturnToSignIn component.",
    },
  },
};
