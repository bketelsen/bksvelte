const preprocess = require('svelte-preprocess');
const vercel = require('@sveltejs/adapter-vercel');
 const { mdsvex } = require('mdsvex');
const mdsvexConfig = require('./mdsvex.config.cjs');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};
