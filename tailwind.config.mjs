import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: '#0d007f',
				'light-blue': '#0000ff',
				red: '#40010D',
				'light-red': '#BF0413',
			},
		},
	},
	plugins: [animations],
}
