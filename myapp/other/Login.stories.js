
import LoginPage from './Login.vue';

export default {
  title: 'Responsive/LoginPage',
  component: LoginPage,
  parameters: {
    docs: {
      description: {
        component: 'This is the Login Page component for user authentication, featuring an email input field and social login buttons.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'submit', description: 'Form submission handler' },
    emailPlaceholder: { control: 'text', defaultValue: 'Email Address', description: 'Placeholder text for the email input field.' },
    buttonLabel: { control: 'text', defaultValue: 'Enter', description: 'Label for the submit button.' },
    showSocialLogins: { control: 'boolean', defaultValue: true, description: 'Toggle visibility of social login buttons.' },
  },
};

const Template = (args) => ({
  components: { LoginPage },
  setup() {
    return { args };
  },
  template: `<LoginPage v-bind="args" @submit="args.onSubmit" />`,
});

// Default story (Desktop view)
export const Default = Template.bind({});
Default.args = {
  emailPlaceholder: 'Email Address',
  buttonLabel: 'Enter',
  showSocialLogins: true,
};
Default.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};

// Mobile View story
export const MobileView = Template.bind({});
MobileView.args = {
  emailPlaceholder: 'Email Address',
  buttonLabel: 'Login',
  showSocialLogins: true,
};
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

// No Social Logins story (Desktop)
export const NoSocialLogins = Template.bind({});
NoSocialLogins.args = {
  emailPlaceholder: 'Email Address',
  buttonLabel: 'Enter',
  showSocialLogins: false,
};
NoSocialLogins.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};

// Pre-filled email (Desktop view)
export const PrefilledEmail = Template.bind({});
PrefilledEmail.args = {
  emailPlaceholder: 'user@example.com',
  buttonLabel: 'Continue',
  showSocialLogins: true,
};
PrefilledEmail.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
