// import { app } from '@storybook/vue3';

// // Global decorators
// app.component('MyComponent', MyComponent);
// export const tags = ['autodocs'];
// .storybook/preview.js
import { app } from '@storybook/vue3';

// Global parameters or decorators can go here
app.component('MyGlobalComponent', MyGlobalComponent);
export const tags = ['autodocs', 'autodocs'];
