/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton : ["Anton", "sans-serif"],  
        montserrat : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

