<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import {getWebsite} from '$lib/dataStore';

  // see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
			const site =  getWebsite('brian.dev')
			return {
				props: { site: site }
			};
	};
</script>
<script>
	export let site;
	const navigation = [
		{name:"Home", route:"/"},
		{name:"Blog", route:"/articles"},
		{name:"Categories", route:"/categories"},
		{name:"About", route:"/about"},

	]
	import Container from '$lib/containers/Page.svelte'
	import TopNav from '$lib/nav/TopNav.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import "../app.postcss";

</script>

<Container>
	<TopNav slot="header" {navigation} brand={site.brand_name}></TopNav>
	<slot></slot>
	<Footer slot="footer"></Footer>
</Container>