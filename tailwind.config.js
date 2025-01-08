/** @type {import('tailwindcss').Config} */

export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];

export const theme = {
  extend: {
    colors: {

      white:  {
        900: "#FFFFFF"
      },

      black: {
        900: "#000000",
        800: "#1E1E21", 
        600: "#2F2F33", 
        400: "#4D4D56",
      },

      blue: {
        800: "#1267FC",
      },
    },
  },
};

export const plugins = [];

