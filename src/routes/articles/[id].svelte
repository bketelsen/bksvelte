<script context="module">
	export const prerender = true;


  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
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
  import Content from "$lib/components/Sections/Content/centered.svelte"
</script>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>

<Content {article} />

<style>
</style>
