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
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<div class="articles">
  <h1>Categories</h1>
  {#each categories as category (category.id)}
    <div>
      <h4><a href="/categories/{category.id}">{category.name}</a></h4>
      <div>{category.description}</div>
    </div>
  {/each}
</div>

<style>
</style>
