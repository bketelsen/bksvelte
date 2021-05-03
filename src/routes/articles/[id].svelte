<script context="module">
	export const prerender = true;

	const slugRegex = /([a-z-]+)(?:\.svx)$/;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page, session }) => {
		const articles = session.articles;
		const { id } = page.params;
		var doc = articles.find((a) => {
			return a.id === id;
		});
            return {
                props: {
					article: doc,
                },
            };
    }
</script>

<script>
	export let article;

	import Content from '$lib/components/Sections/Content/centered.svelte';

</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<Content {article} />

<style>
</style>
