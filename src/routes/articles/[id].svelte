<script context="module">
  import { articles } from "$lib/dataStore";
  import {  dev } from '$app/env';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;
  // we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate = dev;
  // see https://kit.svelte.dev/docs#loading
  export const load = async ({ fetch, page }) => {
    const article = await articles.getOne(page.params.id);
    return {
      props: { article },
    };
  };
</script>

<script>
  export let article;
</script>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>

<div class="article">
  <h1>{article.title}</h1>

  <div>
    <div>{article.publish_date}</div>
    <div>{article.body}</div>
  </div>
</div>

<style>
</style>
