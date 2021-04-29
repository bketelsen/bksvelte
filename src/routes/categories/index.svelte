<script context="module">
  import { categories } from "$lib/dataStore";

  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch }) => {
    const cc = await categories.getAll();

    return {
      props: { categories: cc },
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
