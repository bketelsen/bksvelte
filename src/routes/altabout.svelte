<script context="module">
	export const prerender = true;
	import {getPage} from '$lib/dataStore';

	import {transform} from '$lib/markdown';
	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = getPage('about')

		const rendered = transform(doc.body)
		doc["rendered"] = rendered;
            return {
                props: {
					page: doc,
                },
            };
    }
</script>

<script>
	export let page;
	import { SplitPageWithImage } from 'components';
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<SplitPageWithImage 
	headline='This is the Headline' 
	title='{page.title}' 
	lede='{page.excerpt}' 
	image='{page.image}'
	> 
    {@html page.rendered }
</SplitPageWithImage>
