<script context="module">
	export const prerender = true;
	import {getArticle} from '$lib/dataStore';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const doc = getArticle(id)
            return {
                props: {
					article: doc,
                },
            };
    }
</script>

<script>
	export let article;
	import SvelteMarkdown from 'svelte-markdown';
	import { CenteredPage } from 'components';



</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<CenteredPage headline={article.category.name} title={article.title} lede={article.excerpt}>
	<SvelteMarkdown source={article.body} />
</CenteredPage>