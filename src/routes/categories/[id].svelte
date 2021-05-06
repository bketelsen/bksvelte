<script context="module">
	export const prerender = true;
	import {getCategory} from '$lib/dataStore';
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {
		const { id } = page.params;
		const doc = getCategory(id)
            return {
                props: {
					        category: doc,
                },
            };
    }
</script>
<script>
  export let category;
  import ArticleList from '$lib/pages/ArticleList.svelte';

</script>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>

<ArticleList articles={category.articles} title="Category" heading="{category.name}" description="{category.description}"></ArticleList>