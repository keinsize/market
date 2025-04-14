import type { Config } from 'tailwindcss'

const config: Config = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#005BFF',
				white: '#FFFFFF',
				black: '#000000',
				gray: '#888888',
				'light-gray': '#99A3AE',
				green: '#10C44C',
			},
		},
	},
	plugins: [],
}
export default config
