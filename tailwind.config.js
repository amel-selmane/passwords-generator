module.exports = {
  content: ["./*"],
  theme: {
    fontFamily: {
      primary: "'JetBrains Mono', monospace",
    },
    extend: {
      colors: {
        "custom-grey": "#817D92",
        "dark-grey": "#24232C",
        "almost-white": "#E6E5EA",
        "neon-green": "#A4FFAF",
      },
      maxWidth: {
        540: "540px",
      },
      screens: {
        // => @media (min-width: 580px) { ... }
        mbl: "580px",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
    plugins: [],
  },
};
