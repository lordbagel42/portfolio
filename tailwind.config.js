/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},

  daisyui: {
    themes: ["fantasy", "business"],
  },

	plugins: [daisyui]
};
