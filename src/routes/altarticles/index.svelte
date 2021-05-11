<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import { get } from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const articles = await get("articles?_expand=category&_expand=image&_expand=profile");
		return {
			props: { articles }
		};
	};
</script>

<script>
	import BorderlessCard from '$lib/components/cards/BorderlessCard.svelte';
	import	BorderlessCardGroup from '$lib/components/containers/BorderlessCardGroup.svelte';
	import	BodyWithoutHeader from '$lib/components/containers/BodyWithoutHeader.svelte';
	import	SimpleHeader from '$lib/components/headers/Simple.svelte';
	let title = 'Articles';
	let description = 'News from the Edge';
	export let articles;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<BodyWithoutHeader>
	<SimpleHeader slot="header" {title} {description} />
	<BorderlessCardGroup slot="cardgroup">
		{#each articles as article (article.id)}
			<BorderlessCard
				{article}
				category={article.category}
				profile={article.profile}
				avatar={article.image}
			/>
		{/each}
	</BorderlessCardGroup>
</BodyWithoutHeader>
