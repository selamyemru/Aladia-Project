// src/stories/LoginPage.stories.js
import Login from './Login.vue'; // Adjust the path as needed

export default {
  title: 'Pages/Login', // Make sure this matches your expected path
  component: Login,
  parameters: {
    docs: {
      description: {
        component: `
        ## Login Page Component

        This component represents a login page for Aladia. It features fields for email input, 
        social login buttons, and a terms & conditions link.

        ### Variants

        - **Default:** Standard login view.
        - **Mobile View:** Optimized for mobile devices.
        - **Desktop View:** Optimized for desktop screens.
        `,
      },
    },
  },
};

// Template for creating stories
const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

// Default Login Page
export const Default = Template.bind({});
Default.args = {};

// Mobile View
export const MobileView = Template.bind({});
MobileView.args = {};
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1', // Adjust the viewport for mobile view
  },
};

// Desktop View
export const DesktopView = Template.bind({});
DesktopView.args = {};
DesktopView.parameters = {
  viewport: {
    defaultViewport: 'desktop1', // Adjust the viewport for desktop view
  },
};

// Submit Action View (if needed)
export const WithSubmitAction = Template.bind({});
WithSubmitAction.args = {
  // Any specific args if you have
};
