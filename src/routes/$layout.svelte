<script context="module">
	import {websites,categories}	 from '$lib/dataStore'

	// see https://kit.svelte.dev/docs#loading
	export const load = async () => {

			const website = await websites.getOne('brian.dev');
			const cc = await categories.getAll();
			return {
				props:  {website: website,categories: cc}
			};

	};
</script>

<script>

	export let website;
	export let categories;

	import Header from '$lib/Header/index.svelte';
	import "../app.postcss";

</script>

<Header {categories}/>

<main>
	<slot />
</main>

<footer>
	<p>&copy; 2021 <a href="{website.url}">Brian Ketelsen</a></p>
</footer>

