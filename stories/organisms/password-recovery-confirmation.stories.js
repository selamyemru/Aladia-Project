import PasswordRecoveryConfimationCard from "../../components/organisms/password-recovery-confirmation.vue";

const meta = {
  title: "organisms/PasswordRecoveryConfimationCard",
  component: PasswordRecoveryConfimationCard,
  argTypes: {
    recoveryEmail: {
      control: "text",
      description: "The email address to display in the recovery message",
      defaultValue: "user@example.com",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A password recovery card component that displays a confirmation message and allows users to resend the recovery email.",
      },
    },
  },
};

export default meta;
export const Default = {
  args: {
    recoveryEmail: "user@example.com",
  },
  render: (args) => ({
    components: { PasswordRecoveryConfimationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <PasswordRecoveryConfimationCard :recoveryEmail="args.recoveryEmail" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default password recovery card with a sample email address.",
    },
  },
};

export const CustomEmail = {
  args: {
    recoveryEmail: "custom@example.com",
  },
  render: (args) => ({
    components: { PasswordRecoveryConfimationCard },
    setup() {
      return { args };
    },
    template: `
      <div class="flex max-w-sm p-4 bg-black justify-center items-center min-h-screen">
        <PasswordRecoveryConfimationCard :recoveryEmail="args.recoveryEmail" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Password recovery card with a custom email address.",
    },
  },
};
