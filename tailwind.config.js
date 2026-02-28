/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#051F20',
        section: '#173831',
        accent: '#8CB79B',
        hover: '#235347',
        'card-light': '#DBF0DD',
        foreground: '#E8F5EA',
        muted: '#6B9E7A',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 8s ease-in-out infinite',
        'float-c': 'floatC 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};