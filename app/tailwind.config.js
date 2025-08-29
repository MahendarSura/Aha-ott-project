
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind applies styles to your React components
  ],
  theme: {
    fontFamily: {
      s_bold: ['SoDoSans_Semibold', 'Helvetica', 'sans-serif'],
      bold: ['SoDoSans_Bold', 'Helvetica', 'sans-serif'],
      Regular: ['SoDoSans_Regular', 'Helvetica', 'sans-serif'],
      Light: ['SoDoSans_Light', 'Helvetica', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        // Custom background gradient used for elements like overlays
        'gradient-hover': 'linear-gradient(359.89deg, rgba(0, 0, 0, .74) 19.45%, rgba(0, 0, 0, .383063) 55.07%, rgba(0, 0, 0, 0) 73.63%)',
      },
      boxShadow: {
        // Custom box shadow for elements (like cards or modals)
        'box': '0 4px 15px #a3a3a3ad',
      },
      colors: {
        // Add custom colors for your theme (like brand colors, dark modes, etc.)
        'dark-overlay': 'rgba(0, 0, 0, 0.6)',
        'cta-primary': '#FF5733', // A primary button color, for example
      },
      spacing: {
        // Custom spacing values for padding, margins, etc.
        '128': '32rem', // Example for larger spacing
        '144': '36rem',
      },
      screens: {
        // Adding breakpoints for responsive design
        'xs': '475px',  // Mobile-first approach (you can add specific breakpoints if needed)
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here, if you want to extend functionality
  ],
}

