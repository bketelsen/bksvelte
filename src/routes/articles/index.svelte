<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import { getArticles } from '$lib/dataStore';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const articles = getArticles();
		return {
			props: { articles }
		};
	};
</script>

<script>
	import { ArticleCard, BodyWithHeader, CardGroup } from 'components';
	let title = 'Articles';
	let heading = 'Blog Posts';
	let description = 'News from the Edge';
	export let articles;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard {article} />
		{/each}
	</CardGroup>
</BodyWithHeader>
