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
				profile={article.profile}
				avatar={article.image}
			/>
		{/each}
	</BorderlessCardGroup>
</BodyWithoutHeader>
