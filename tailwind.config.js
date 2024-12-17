/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1a2a6c',
        lightBlue: '#b21f1f',
        gradientStart: '#ff0080',
        gradientMiddle: '#ff8c00',
        gradientEnd: '#8e44ad',
      },
    },
  },
  plugins: [],
};


