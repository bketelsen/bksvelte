const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'aot',
	purge: {
		content: [
			'./src/**/*.{html,js,svelte,ts}',
			'./node_modules/components/**/*.{html,js,svelte,ts}'
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			]
		},
		safelist: [/^svelte-[\d\w]+$/]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				purple: colors.purple,
				blue: colors.blue,
				lime: colors.lime,
				amber: colors.amber,
				orange: colors.orange,
				red: colors.red,
				bluegray: colors.blueGray,
				main: colors.gray,
				bg: colors.gray,
				contrast: colors.cyan
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		function ({ addUtilities, addComponents, e, prefix, config }) {
			// add your plugin functionality here
		}
	]
};
