/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#112240",
        textColor: "#8892B0",
        primaryColor: "#64FFDA",
      },
      screens: {
        // min-width
        xs: "476px",
        // => @media (min-width: 480px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        // max-width
        "2xl-mx": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "xl-mx": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-mx": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "md-mx": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "sm-mx": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        "xs-mx": { max: "475px" },
        // => @media (max-width: 475px) { ... }
      },
    },
  },
  plugins: [],
};
