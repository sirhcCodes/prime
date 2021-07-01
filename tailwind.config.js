module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    minHeight: {
      72: '18rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        hi: 'url(/img/hi.jpg)',
      }),
      animation: {
        'on-load': 'on-load 1s ease forwards',
        'icon-activities': 'icon-activities 2s ease .5s forwards',
        'about-me': 'about-me 1.3s ease .1s forwards',
        'fade-in': 'fade-in 2s ease .2s forwards',
      },
      keyframes: {
        'on-load': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'icon-activities': {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'about-me': {
          '0%': { transform: 'translateY(8%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
