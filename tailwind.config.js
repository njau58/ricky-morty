/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary_dark: "#063517",
        secondary: "#21B6A8",
        tertiary: "#A3EBB1",
        primary: "#18A558",

        "secondary-text": "#686868",
      },
      backgroundImage: {
        hero: "url('../../src/assets/images/img-11.jpg')",
        services: "url('../../src/assets/images/img-6.jpg')",
        cta: "url('../../src/assets/images/img-10.jpg')",
        footer: "url('../../src/assets/images/img-2.jpg')",
        expertise: "url('../../src/assets/images/globe.png')",
        

      

      },
    },
  },
  plugins: [],
};
