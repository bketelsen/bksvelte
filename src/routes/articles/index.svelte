<script context="module">
	export const prerender = true;
	export const hydrate = false;
	import { get } from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const articles = await get("articles?_expand=category&_expand=image");
		return {
			props: { articles: articles}
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
