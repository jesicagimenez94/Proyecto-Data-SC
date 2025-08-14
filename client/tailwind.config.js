module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        "heading-d-h1": "var(--heading-desktop-h1-font-family)",
        "heading-d-h2": "var(--heading-desktop-h2-font-family)",
        "heading-d-h3": "var(--heading-d-h3-font-family)",
        "heading-d-h4": "var(--heading-d-h4-font-family)",
        "heading-d-h5": "var(--heading-d-h5-font-family)",
        "heading-d-tagline": "var(--heading-d-tagline-font-family)",
        "heading-m-h1": "var(--heading-m-h1-font-family)",
        "heading-m-h2": "var(--heading-m-h2-font-family)",
        "heading-m-h3": "var(--heading-m-h3-font-family)",
        "heading-m-h4": "var(--heading-m-h4-font-family)",
        "heading-m-h5": "var(--heading-m-h5-font-family)",
        "text-large-semi-bold": "var(--text-large-semi-bold-font-family)",
        "text-medium-normal": "var(--text-medium-normal-font-family)",
        "text-regular-medium": "var(--text-regular-medium-font-family)",
        "text-regular-normal": "var(--text-regular-normal-font-family)",
        "text-regular-semi-bold": "var(--text-regular-semi-bold-font-family)",
        "text-small-link": "var(--text-small-link-font-family)",
        "text-small-normal": "var(--text-small-normal-font-family)",
        "text-small-semi-bold": "var(--text-small-semi-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
