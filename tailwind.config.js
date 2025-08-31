/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "trust-blue": "#1E3A8A",
        "tradition-gold": "#D97706",
        "warm-beige": "#F3E1B0",
        "light-beige": "#FFFBEB",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        shimmer: { "100%": { transform: "translateX(100%)" } },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
