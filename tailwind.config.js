/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'efet-blue': '#0A6CF0',
        'efet-dark': '#053A73',
        'efet-light': '#F5F5F7',
        'efet-orange': '#FF6B35',
        'efet-black': '#1C1C1E',
      },
      fontFamily: {
        'sf-pro': ['Oswald', 'sans-serif'], // Replacing with Oswald for the "Grack" look
        'inter': ['Oswald', 'sans-serif'],
        'outfit': ['Oswald', 'sans-serif'], // Headers now match the primary font
        'clash': ['Oswald', 'sans-serif'],
        'poppins': ['Barlow Condensed', 'sans-serif'], // Secondary option if needed
        'oswald': ['Oswald', 'sans-serif'],
        'grack': ['Oswald', 'sans-serif'], // Alias for the user's mental model
      },
      boxShadow: {
        'apple': '0 10px 30px rgba(0,0,0,0.08)',
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
