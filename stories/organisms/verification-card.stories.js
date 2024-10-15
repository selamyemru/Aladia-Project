import VerificationCard from "../../components/organisms/verification-card.vue";

const placeholderLogo = "https://via.placeholder.com/96?text=Logo";

const meta = {
  title: "organisms/VerificationCard",
  component: VerificationCard,
  argTypes: {
    userName: {
      control: "text",
      description: "The name of the user to display",
      defaultValue: "Aladia User",
    },
    logo: {
      control: "text",
      description: "URL of the logo or profile picture",
      defaultValue: placeholderLogo,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A verification card component that prompts the user to enter a 6-digit code sent via email.",
      },
    },
  },
};

export default meta;
export const Default = {
  args: {
    userName: "Aladia User",
    logo: placeholderLogo,
  },
  render: (args) => ({
    components: { VerificationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <VerificationCard
          :userName="args.userName"
          :logo="args.logo"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default verification card with placeholder logo and default user name.",
    },
  },
};

export const CustomUser = {
  args: {
    userName: "John Doe",
    logo: "https://via.placeholder.com/96?text=JD",
  },
  render: (args) => ({
    components: { VerificationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <VerificationCard
          :userName="args.userName"
          :logo="args.logo"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Verification card with custom user name and logo.",
    },
  },
};
