<script context="module">
	export const prerender = true;
	import {getPage} from '$lib/dataStore';

	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = getPage('about')
		console.log(doc)
            return {
                props: {
					page: doc,
                },
            };
    }
</script>

<script>
	export let page;
	import SvelteMarkdown from 'svelte-markdown';
	import { SplitPageWithImage } from 'components';



</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<SplitPageWithImage headline='Hi' title='{page.title}' lede='{page.excerpt}' imagealt="{page.title}" imagefilename='{page.image.file_name}'>
	<SvelteMarkdown source={page.body} />

</SplitPageWithImage>