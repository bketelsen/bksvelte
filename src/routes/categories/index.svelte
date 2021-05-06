<script context="module">

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import {getCategories} from '$lib/dataStore';
 	
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
			const categories =  getCategories()
			return {
				props: { categories }
			};
	};
</script>

<script>
export let categories;
import CategoryList from '$lib/pages/CategoryList.svelte';

</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<CategoryList title="Categories" heading={"Category List"} description={""} {categories}></CategoryList>

<style>
</style>
