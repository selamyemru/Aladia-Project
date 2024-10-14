import { ref } from "vue";

import LoginPasswordCard from "../../components/organisms/login-password-card.vue";

const meta = {
  title: "organisms/LoginPasswordCard",
  component: LoginPasswordCard,
  parameters: {
    docs: {
      description: {
        component:
          "A card component for entering the password during the login process.",
      },
    },
  },
};

export default meta;
export const Default = {
  render: () => ({
    components: { LoginPasswordCard },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <LoginPasswordCard />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default appearance of the LoginPasswordCard component.",
    },
  },
};

export const WithHandlers = {
  render: () => ({
    components: { LoginPasswordCard },
    setup() {
      const handleSubmitPassword = (password) => {
        alert(`Password submitted: ${password}`);
      };

      const handleForgotPassword = () => {
        alert("Forgot Password clicked!");
      };

      return { handleSubmitPassword, handleForgotPassword };
    },
    template: `
      <div class="p-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <LoginPasswordCard
          @submitPassword="handleSubmitPassword"
          @forgotPassword="handleForgotPassword"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "LoginPasswordCard with handlers for submitPassword and forgotPassword events.",
    },
  },
};
