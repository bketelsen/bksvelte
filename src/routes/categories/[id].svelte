<script context="module">
	export const prerender = true;
	export const hydrate = false;
	import { get } from '$lib/api';
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const res = await fetch(`/api/categories/${id}.json`);
		if (res.ok) {
			const { category } = await res.json();

			const ares = await fetch(`/api/articles.json`);
			const { articles } = await ares.json();

			const category_articles = articles.filter((a) => {
				return a.category_id === id;
			});
			return {
				props: {
					category: category,
					articles: category_articles
				}
			};
		}
	};
</script>

<script>
	export let category;
	export let articles;
	import ArticleCard from '$lib/components/cards/ArticleCard.svelte';
	import BodyWithHeader from '$lib/components/containers/BodyWithHeader.svelte';
	import CardGroup from '$lib/components/containers/CardGroup.svelte';

	let title = 'Category';
	$: heading = category.name;
	$: description = category.description;
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>

<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard {article} />
		{/each}
	</CardGroup>
</BodyWithHeader>
