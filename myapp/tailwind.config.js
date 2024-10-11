/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

