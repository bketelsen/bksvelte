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
	export let articles;
	import ArticleList from '$lib/pages/ArticleList.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<ArticleList {articles} title="latest" heading="Featured Articles" description="Here are some of the hottest articles on the blog"></ArticleList>