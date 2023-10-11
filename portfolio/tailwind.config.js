import config from './gitprofile.config';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      ...config.themeConfig.themes,
      { procyon: config.themeConfig.customTheme },
    ],
  },
};
