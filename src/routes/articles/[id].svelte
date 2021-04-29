<script context="module">
	import {blox}	 from '$lib/dataStore'

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch, page }) => {
			const article = await blox.getArticle(page.params.id);
			return {
				props: { article }
			};

	};
</script>

<script>
	
	export let article;
	
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<div class="article">
	<h1>{article.title}</h1>

	<div>
		<div>{article.publish_date}</div>
		<div>{article.body}</div>
	</div>

</div>

<style>

</style>
