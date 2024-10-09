// src/stories/LoginPage.stories.js

import LoginPage from './Login.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    docs: {
      description: {
        component: 'The `LoginPage` component provides a user-friendly interface for logging in or creating an account. It supports email-based login and various social media integrations.',
      },
    },
  },
};

// Template for rendering the LoginPage component
const Template = (args) => ({
  components: { LoginPage },
  setup() {
    return { args };
  },
  template: '<LoginPage v-bind="args" />',
});

// Default variant showing standard usage
export const Default = Template.bind({});
Default.args = {
  // Add props like email and password here if applicable
};
Default.parameters = {
  docs: {
    storyDescription: 'Default usage of the LoginPage component.',
  },
};

// Mobile variant demonstrating responsiveness
export const MobileVariant = Template.bind({});
MobileVariant.args = {
  // Include specific props for mobile view if necessary
};
MobileVariant.parameters = {
  docs: {
    storyDescription: 'Demonstrates the LoginPage component on mobile devices.',
  },
};

// Variant showing the action on submit
export const WithSubmitAction = Template.bind({});
WithSubmitAction.args = {
  handleSubmit: action('form-submitted'),
};
WithSubmitAction.parameters = {
  docs: {
    storyDescription: 'Shows how the component handles form submission.',
  },
};

// Adding controls for interactive prop editing
WithSubmitAction.argTypes = {
  handleSubmit: { action: 'form-submitted' },
  // Add other props for interactive controls if applicable
};
