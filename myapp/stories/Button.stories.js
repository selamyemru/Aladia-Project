// import Button from '../components/atoms/Button.vue';

// export default {
//   title: 'Atoms/Button',
//   component: Button,
// };

// export const Primary = () => ({
//   components: { Button },
//   template: '<Button type="submit" label="Enter" />',
// });
import Button from '../components/atoms/Button.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component used for user interactions.',
      },
    },
  },
};

/**
 * Primary button that triggers an action when clicked.
 */
export const Primary = () => ({
  components: { Button },
  template: '<Button type="submit" label="Enter" />',
});
