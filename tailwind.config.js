module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1B2B",
          ink: "#101828",
          slate: "#1F2A37",
          bronze: "#8C7A4B",
          gold: "#B89B5E",
          ivory: "#F7F5F0",
          mist: "#F4F6F8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "ui-serif",
          "Georgia",
          "Cambria",
          "serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.04)",
        cardHover:
          "0 6px 16px -4px rgba(11,27,43,0.10), 0 4px 10px -4px rgba(11,27,43,0.06)",
        soft: "0 30px 60px -30px rgba(11,27,43,0.25)",
      },
      animation: {
        fade: "fadeIn 0.3s ease-in-out 1 forwards",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at top, rgba(11,27,43,0.04), transparent 60%), linear-gradient(to bottom, #ffffff, #F7F5F0)",
        "navy-radial":
          "radial-gradient(ellipse at top, #14304b 0%, #0B1B2B 55%, #060f1a 100%)",
      },
      screens: {
        mobile: { max: "960px" },
        md: { min: "768px" },
        nonlg: { max: "1000px" },
        lg: { min: "1000px" },
        micro: { max: "750px" },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
