<script context="module">
	export const prerender = true;
	import { get } from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const articles = await get("articles?_expand=category&_expand=image");
		const featured = articles.filter((a) => {
			return a.featured;
		});
		return {
			props: { articles: featured }
		};
	};
</script>

<script>
	export let articles;
	import SvelteSeo from 'svelte-seo';
	let title = 'latest';
	let heading = 'Featured Articles';
	let description = 'Here are some of the hottest articles on the blog';
	import  ArticleCard from '$lib/components/cards/ArticleCard.svelte';
	import BodyWithHeader from '$lib/components/containers/BodyWithHeader.svelte';
	import CardGroup  from '$lib/components/containers/CardGroup.svelte';
	import ParagraphBrand from '$lib/components/sections/newsletter/ParagraphBrand.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<SvelteSeo
	openGraph={{
		title: 'Page Title',
		description: 'Page Description',
		url: 'https://www.example.com/page',
		type: 'website',
		images: [
			{
				url: 'https://www.example.com/images/og-image.jpg',
				width: 850,
				height: 650,
				alt: 'Og Image Alt'
			}
		]
	}}
/>

<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard {article} />
		{/each}
	</CardGroup>
	<ParagraphBrand />
</BodyWithHeader>
