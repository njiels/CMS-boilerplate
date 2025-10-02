/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
    "blocks/**/*.vue",
  ],
  screens: {
    lp: { max: '1440px' },
    tl: { max: '1199px' },
    tp: { max: '1023px' },
    ph: { max: '767px' },
  },
  spacing: {
    23: '5.75rem',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}