<script context="module">
	export const prerender = true;
	import {resolveCategory} from '$lib/dataStore';


	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const doc = resolveCategory(id)
            return {
                props: {
					        category: doc,

                },
            };
    }
</script>


<script>
  export let category;
</script>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>

<div class="article">
  <h1>{category.name}</h1>
  <h3>{category.description}</h3>
  <div>

    <h3>Articles in {category.name}</h3>

  </div>
</div>

<style>
</style>
