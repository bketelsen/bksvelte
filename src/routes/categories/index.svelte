<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import { getCategories } from '$lib/dataStore';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const categories = getCategories();
		return {
			props: { categories }
		};
	};
</script>

<script>
	export let categories;
	import { SimpleCard, BodyWithHeader, SimpleCardGroup } from 'components';

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
