<script context="module">
	export const prerender = true;
	import {getPage} from '$lib/dataStore';

	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = getPage('about')
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
	import { InsetImage } from 'components';



</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<InsetImage headline='This is the Headline' caption="I'm a Caption" title='{page.title}' lede='{page.excerpt}' imagealt="{page.title}" image='{page.image}'>
	<SvelteMarkdown source={page.body} />

</InsetImage>