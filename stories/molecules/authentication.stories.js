import AuthForm from "../../components/molecules/auth-form.vue";
import { ref } from "vue";

const meta = {
  title: "molecules/Authentication ",
  component: AuthForm,
  parameters: {
    docs: {
      description: {
        component:
          "An authentication form component where users can enter their email address. Includes validation and submission handling.",
      },
    },
  },
};

export default meta;
export const Default = {
  render: () => ({
    components: { AuthForm },
    setup() {
      const email = ref("");
      const handleSubmit = (submittedEmail) => {
        email.value = submittedEmail;
        alert(`Email submitted: ${submittedEmail}`);
      };
      return { email, handleSubmit };
    },
    template: `
      <AuthForm @submitEmail="handleSubmit" />
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "Default AuthForm with basic email input and validation.",
    },
  },
};


 
