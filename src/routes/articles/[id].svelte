<script context="module">
			export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch, page }) => {
		console.log(page.params.id)
		const res = await fetch(`/articles/${page.params.id}.json`);
	
		if (res.ok) {
			const article = await res.json();
	
			return {
				props: { article }
			};
		}
	
		const { message } = await res.json();
	
		return {
			error: new Error(message)
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
