<script context="module">
		export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const res = await fetch('/articles.json');
	
		if (res.ok) {
			const articles = await res.json();
	
			return {
				props: { articles }
			};
		}
	
		const { message } = await res.json();
	
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	
	export let articles;
	
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<div class="articles">
	<h1>Articles</h1>



	{#each articles as article (article.id)}
	<div>
		<h4><a href="/articles/{article.id}" >{article.title}</a></h4>
		<div>{article.excerpt}</div>
	</div>

	{/each}
</div>

<style>

</style>
