/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {		colors: {
			primary: '#FF5D00',
			backgroundColor: '#25282A'}
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		}
	},
	plugins: [],
}
