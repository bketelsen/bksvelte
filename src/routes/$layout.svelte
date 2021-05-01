<script context="module">
	import {websites,categories}	 from '$lib/dataStore'

	// see https://kit.svelte.dev/docs#loading
	
	export const load = async () => {

		const website = await websites.getOne('brian.dev');
			const cc = await categories.getAll();
			return {
				props:  {
					website: website,
					categories: cc
				}
			};

	};

</script>

<script>

	export let website;
	export let categories;

	const navigation = [
		{name:"Home", route:"/"},
		{name:"Blog", route:"/articles"},
		{name:"Categories", route:"/categories"},
		{name:"About", route:"/about"},

	]
	

	import Container from '$lib/components/Container/full.svelte'
	import TopNav from '$lib/components/TopNav/search.svelte';
	import Footer from '$lib/components/Footer/index.svelte';

	import "../app.postcss";

</script>

<Container>
<TopNav slot="header" {navigation}></TopNav>
<slot></slot>
<Footer slot="footer"></Footer>
</Container>