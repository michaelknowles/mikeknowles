// tailwind.config.js

module.exports = {
  purge: {
    enabled: true,
    content: ["./hugo_stats.json"],
    defaultExtractor: (content) => {
      const els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      body: ["Lato", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: theme("colors.green.500"),
              },
            },
          },
        },
      }),
      // animation: {
      //   fadeIn: "fadeIn 0.5s ease-in forwards",
      // },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: 0 },
      //     "100%": { opacity: 1 },
      //   },
      // },
    },
  },
  variants: {
    // animation: ["motion-safe"],
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
