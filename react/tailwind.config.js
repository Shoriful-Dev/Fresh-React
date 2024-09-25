/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'mainContainer': '1320px',
      },
      fontFamily: {
        'poppins': ["Poppins"],
        'ruhi': ["Frank Ruhl Libre"],
        'podkova': ["Podkova"],
      },
    },
  },
  plugins: [],
}
