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
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      screens: {
        // min-width
        xsm: "350px",
        // => @media (min-width: 350px) { ... }

        xs: "476px",
        // => @media (min-width: 480px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        bs: "900px",
        // => @media (min-width: 900px) { ... }

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

        "bs-mx": { max: "899px" },
        // => @media (max-width: 899px) { ... }

        "md-mx": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "sm-mx": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        
        "xs-mx": { max: "475px" },
        // => @media (max-width: 475px) { ... }

        "xsm-mx": { max: "349px" },
        // => @media (max-width: 349px) { ... }
      },
    },
  },
  plugins: [],
};
