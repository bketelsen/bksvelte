<script context="module">
	export const prerender = true;
	export const hydrate = false;
	import MarkdownIt from 'markdown-it';
	import replacelink from '$lib/replace';

	import 'highlight.js/styles/vs2015.css';
	import hljs from 'highlight.js';
///	import imageTag from '$lib/image';
	// Initialize `markdown-it`
	const md = new MarkdownIt({
		replaceLink: function (link, env) {
			return 'https://bkapi.vercel.app' + link;
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
	export const load = async ({ page,fetch }) => {
		const { id } = page.params;
		const res = await fetch(`/api/articles/${id}.json`);
		if (res.ok) {
			const {article} = await res.json();
			const rendered = md.render(article.body, article);
			article['rendered'] = rendered;
//				const tag = await imageTag(article.image);
	//		article.image['tag'] = tag;
			return {
				props: {
					article: article
				}
			};
		}
	};
</script>

<script>
	export let article;

	import  CenteredPage  from '$lib/components/content/CenteredPage.svelte';
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<CenteredPage headline={article.category.name} title={article.title} lede={article.excerpt}>
{@html article.rendered}
</CenteredPage>
