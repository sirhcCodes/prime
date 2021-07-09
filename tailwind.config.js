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
      full: '100%',
      screen: '100vh',
    },
    extend: {
      backgroundImage: (theme) => ({
        hi: 'url(/img/hi.jpg)',
      }),
      animation: {
        'on-load': 'on-load 1s ease forwards',
        'links-load': 'on-load .5s ease forwards',
        'icon-activities': 'icon-activities 2s ease .5s forwards',
        'about-me': 'about-me 1.3s ease .1s forwards',
        'fade-in': 'fade-in 2s ease .2s forwards',
        spin: 'spin .1s ease forwards',
        load: 'load .5s linear infinite',
        'spin-out': 'spin .1s ease reverse',
        pulse: 'pulse .8s ease infinite',
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
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
        load: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%': { opacity: 0.3 },
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
