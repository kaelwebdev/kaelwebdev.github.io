/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				/* color_theme_light_title: colors.sky,
				color_theme_dark_title: colors.yellow,  */
			},
		},
	},
	plugins: [],
}
