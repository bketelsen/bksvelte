<script context="module">

  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
		const res = await fetch(`/categories/${page.params.id}.json`);
    if (res.ok) {
			const category = await res.json();
			return {
				props: { category }
			};
		}
	
		const { message } = await res.json();
	
		return {
			error: new Error(message)
		};
	};;
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
    {#each category.articles as article (article.id)}
    <div>
      <h4><a href="/articles/{article.id}">{article.title}</a></h4>
      <div>{article.excerpt}</div>
    </div>
  {/each}
  </div>
</div>

<style>
</style>
