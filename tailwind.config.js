/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green' : '#20B486',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: [ 'focus' ],
    },
  },
  plugins: [],
};