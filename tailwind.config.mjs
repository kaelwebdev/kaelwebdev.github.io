/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				/* primaryA: "#0369a1",
				secondaryA: "var(--color-secondary)",
				primaryB: "#0369a1",
				secondaryB: "var(--color-secondary)", */
			},
		},
	},
	plugins: [],
}
