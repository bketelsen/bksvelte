<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const res = await fetch('/api/articles.json');
		if (res.ok) {
			const { articles } = await res.json();
			const featured = articles.filter((a) => {
				return a.featured;
			});
			return {
				props: {
				 articles: featured 
				}
			};
		}
	};
</script>

<script>
	export let articles;


	let title = 'latest';
	let heading = 'Featured Articles';
	let description = 'Here are some of the hottest articles on the blog';
	import ArticleCard from '$lib/components/cards/ArticleCard.svelte';
	import BodyWithHeader from '$lib/components/containers/BodyWithHeader.svelte';
	import CardGroup from '$lib/components/containers/CardGroup.svelte';
	import ParagraphBrand from '$lib/components/sections/newsletter/ParagraphBrand.svelte';
	import Info from '$lib/components/alerts/Info.svelte';

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard {article} />
		{/each}
	</CardGroup>
	<ParagraphBrand />
</BodyWithHeader>
