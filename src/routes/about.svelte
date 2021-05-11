<script context="module">
	export const prerender = true;
	import { get } from '$lib/api';
	import MarkdownIt from 'markdown-it';
	import 'highlight.js/styles/a11y-light.css';

	import hljs from 'highlight.js';

	// Initialize `markdown-it`
	const md = new MarkdownIt({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error('Failed to highlight string');
				}
			}
			return ''; // use external default escaping
		}
	});

	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = await get('pages/about?_expand=image');
		const rendered = md.render(doc.body);
		doc['rendered'] = rendered;
		return {
			props: {
				page: doc
			}
		};
	};
</script>

<script>
	export let page;
	import InsetImage from '$lib/components/content/InsetImage.svelte';
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<InsetImage
	headline="Life on the Edge"
	title={page.title}
	baseurl="https://bkapi.vercel.app/api/"
	lede={page.excerpt}
	image={page.image}
>
	{@html page.rendered}
</InsetImage>
