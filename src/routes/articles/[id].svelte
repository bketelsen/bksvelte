<script context="module">
	export const prerender = true;
	import {resolveArticle} from '$lib/dataStore';


	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page }) => {

		const { id } = page.params;

		const doc = resolveArticle(id)
		
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

