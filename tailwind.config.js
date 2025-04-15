/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      maxHeight: {
        128: '32rem', // = 512px
      },
      opacity: {
        67: '0.67',
      },
      spacing: {
        4.25: '17rem',
      },
    },
  },
  plugins: [],
}
