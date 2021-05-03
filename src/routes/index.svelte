<script context="module">

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import {getArticles} from '$lib/dataStore';


  // see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {

			const articles =  getArticles()
			return {
				props: { articles }
			};

	

	};
</script>

<script>
	export let articles;
	import Blog from '$lib/components/Sections/Blog/threecolumncard.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Blog {articles} title="latest" heading="Featured Articles" description="Here are some of the hottest articles on the blog"></Blog>