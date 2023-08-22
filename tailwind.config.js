/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        // other fallback fonts
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        // other fallback fonts
      ],
    },
  },
  plugins: [flowbite],
};
