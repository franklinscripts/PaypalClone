/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#142C8E",
        'secondary': "#FFFFFF",
        'link': "#1072EB",
        'text':'#0C0C41',
        "nav-link": '#D1F1FF', 
      }
    },
  },
  plugins: [],
}