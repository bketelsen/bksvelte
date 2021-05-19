<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	export const hydrate = false;
	import { get } from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/categories.json');
		if (res.ok) {
			const {categories} = await res.json();

			return {
				props: {
					categories
				}
			};
		};
	};
</script>

<script>
	export let categories;
	import  SimpleCard from '$lib/components/cards/SimpleCard.svelte';
	import BodyWithHeader from '$lib/components/containers/BodyWithHeader.svelte';
	import SimpleCardGroup  from '$lib/components/containers/SimpleCardGroup.svelte';

	let title = 'Categories';
	let heading = 'Category List';
	let description = '';
</script>

<svelte:head>
	<title>Categories</title>
</svelte:head>

<BodyWithHeader {title} {heading} {description}>
	<SimpleCardGroup>
		{#each categories as category (category.id)}
			<SimpleCard
				color={category.color}
				title={category.name}
				description={category.description}
				link="/categories/{category.id}"
			/>
		{/each}
	</SimpleCardGroup>
</BodyWithHeader>
