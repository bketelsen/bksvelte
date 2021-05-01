<script context="module">

  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
		const res = await fetch('/categories.json');
		if (res.ok) {
			const categories = await res.json();
			return {
				props: { categories }
			};
		}
	
		const { message } = await res.json();
	
		return {
			error: new Error(message)
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
