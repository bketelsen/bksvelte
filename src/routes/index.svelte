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
	import SvelteSeo from "svelte-seo";
  let title="latest" 
  let heading="Featured Articles" 
  let description="Here are some of the hottest articles on the blog"
  import { ArticleCard, BodyWithHeader, CardGroup } from 'components';
	import { getArticle } from '$lib/dataStore';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<SvelteSeo 
  openGraph={{
    title: 'Page Title',
    description: 'Page Description',
    url: 'https://www.example.com/page',
    type: 'website',
    images: [
      {
        url: 'https://www.example.com/images/og-image.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt'
      }
     ]
  }}
/>

<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard article={getArticle(article.id)} />
		{/each}
	</CardGroup>
</BodyWithHeader>
