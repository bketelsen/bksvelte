<script context="module">
	export const prerender = true;
	import { get} from '$lib/api';
	import MarkdownIt from 'markdown-it';
	import replacelink from '$lib/replace';

	import 'highlight.js/styles/vs2015.css';
	import hljs from 'highlight.js';

	// Initialize `markdown-it`
	const md = new MarkdownIt({
		replaceLink: function (link, env) {
        return "https://bkapi.vercel.app" + link;
    },
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
	}).use(replacelink);
	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = await get('pages/about?_expand=image');
		const rendered = md.render(doc.body,doc);
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
	import  SplitPageWithImage  from '$lib/components/content/SplitPageWithImage.svelte';
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<SplitPageWithImage
	headline="This is the Headline"
	title={page.title}
	lede={page.excerpt}
	image={page.image}
>
{@html page.rendered}	
</SplitPageWithImage>
