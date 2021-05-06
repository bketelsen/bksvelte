
<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import {getArticles} from '$lib/dataStore';

  // see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {

			const articles =  getArticles()
			const featured = articles.filter((a)=>{return a.featured})
			return {
				props: { articles: featured }
			};
	};
</script>
<script>
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
	<TopNav slot="header" {navigation} brand={"Brian Ketelsen"}></TopNav>
	<slot></slot>
	<Footer slot="footer"></Footer>
</Container>