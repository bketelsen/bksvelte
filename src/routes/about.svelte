<script context="module">
	export const prerender = true;
	import { get} from '$lib/api';

	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = await get('pages/about?_expand=image');	
		
		return {
			props: {
				page: doc
			}
		};
	};
</script>

<script>
	export let page;
	import InsetImage  from '$lib/components/content/InsetImage.svelte'
	import SharpImage from '$lib/components/util/SharpImage.svelte'
	import SvelteMarkdown from 'svelte-markdown';
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<InsetImage headline="Life on the Edge" title={page.title} 	baseurl="https://bkapi.vercel.app/api/"
 lede={page.excerpt} image={page.image}>
 <SvelteMarkdown source={page.body} />

</InsetImage>
