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
  import { ArticleCard, BodyWithHeader, CardGroup } from 'components';
	import { getArticle } from '$lib/dataStore'

  let title="Category" 
  $: heading=category.name
  $: description=category.description

</script>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>


<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each category.articles as article (article.id)}
			<ArticleCard article={getArticle(article.id)} />
		{/each}
	</CardGroup>
</BodyWithHeader>
