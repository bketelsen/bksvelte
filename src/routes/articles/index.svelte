<script context="module">
	export const prerender = true;
	export const hydrate = false;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/articles.json');
		if (res.ok) {
			const {articles} = await res.json();

			return {
				props: {
					articles
				}
			};
		}
	};
</script>

<script>
	import  ArticleCard from '$lib/components/cards/ArticleCard.svelte';
	import BodyWithHeader from '$lib/components/containers/BodyWithHeader.svelte';
	import CardGroup  from '$lib/components/containers/CardGroup.svelte';
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
