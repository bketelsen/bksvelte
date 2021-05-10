<script context="module">
	export const prerender = true;
	import { getPage } from '$lib/dataStore';

	import { transform } from '$lib/markdown';
	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {
		const doc = getPage('about');
		const rendered = transform(doc.body);
		doc['rendered'] = rendered;
		return {
			props: {
				page: doc
			}
		};
	};
</script>

<script>
	export let page;
	import { InsetImage } from 'components';
	import SharpImage from '$lib/components/SharpImage.svelte'
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<InsetImage headline="Life on the Edge" title={page.title} 	baseurl="https://bkapi.vercel.app/api/"
 lede={page.excerpt} image={page.image}>

	{@html page.rendered}
</InsetImage>
<SharpImage 
	baseurl="https://bkapi.vercel.app/api"
	src="/images/bigbit.png"
	class="object-cover"
/>