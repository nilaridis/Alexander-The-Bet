/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,svelte}"],
  theme: {
      fontFamily: {
        'oswald': ['Oswald'],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      extend: {
          colors: {
              primary: "#fefeff",
              secondary: "#564436",
              tertiary: "#9ca3af",
              quaternary: "#634f3e",
              danger: "#DC2626",
              success: "#16A34A",
              warning: "#CA8A04",
              off: "#6B7280",
              "primary-text": "#0a1c4c",
              "secondary-text": "#0b51b9",
          },
      },
  },
};