/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        gradient: "linear-gradient(90deg, #605CEF 0%, #48468F 100%)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(104, 100, 255, 0.2) 0%, rgba(104, 100, 255, 0.14) 39%, rgba(104, 100, 255, 0.08) 100%)",
      },
    },
  },
  plugins: [],
};
