/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maple: {
          dark: '#452308',
          normal: '#C46316',
          light: '#D16B17',
        },
        compColor: {
          lightGreen: '#1FC481',
          darkGreen: '#197851',
          lightBlue: '#0C48C4',
          darkBlue: '#012878',
        },
      },
    },
  },
  plugins: [daisyui],
};
