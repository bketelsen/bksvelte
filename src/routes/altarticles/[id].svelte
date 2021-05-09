<script context="module">
	export const prerender = true;
	import { getArticle } from '$lib/dataStore';
	import { transform } from '$lib/markdown';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const doc = getArticle(id);
		const rendered = transform(doc.body);
		doc['rendered'] = rendered;
		return {
			props: {
				article: doc
			}
		};
	};
</script>

<script>
	export let article;
	import { CenteredPage } from 'components';
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<CenteredPage headline={article.category.name} title={article.title} lede={article.excerpt}>
	{@html article.rendered}
</CenteredPage>
