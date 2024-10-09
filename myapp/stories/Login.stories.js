import LoginPage from '../components/Login.vue';

export default {
  title: 'Components/Login',
  component: LoginPage,
};

const Template = (args) => ({
  components: { LoginPage },
  setup() {
    return { args };
  },
  template: '<LoginPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  handleSubmit: () => alert('Form submitted with alert!'), 
};
// import LoginPage from '../components/Login.vue';

// export default {
//   title: 'Components/Login',
//   component: LoginPage,
//   parameters: {
//     docs: {
//       description: {
//         component: 'The `LoginPage` component is a form used to authenticate users by collecting their credentials (username/email and password). It also supports validation and event handling for form submission.',
//       },
//     },
//     decorators: [
//       (story) => ({
//         components: { story },
//         template: '<div><story /></div>',
//       }),
//     ],
//   },
//   argTypes: {
//     handleSubmit: {
//       description: 'Function to handle form submission. This function is called when the form is submitted.',
//       action: 'submitted',
//       control: { type: 'function' },
//       table: {
//         category: 'Events',
//       },
//     },
//   },
// };


// export const Default = () => ({
//   components: { LoginPage },
//   template: '<LoginPage />',
// });