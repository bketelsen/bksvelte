<script context="module">
	export const prerender = true;
	import { get} from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const doc = await get(`articles/${id}?_expand=category&_expand=image`);		
		return {
			props: {
				article: doc
			}
		};
	};
</script>

<script>
	export let article;
	import SvelteMarkdown from 'svelte-markdown';

	import  CenteredPage  from '$lib/components/content/CenteredPage.svelte';
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<CenteredPage headline={article.category.name} title={article.title} lede={article.excerpt}>
	<SvelteMarkdown source={article.body} />
</CenteredPage>
