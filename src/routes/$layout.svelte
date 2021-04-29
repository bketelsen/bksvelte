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

	import Navigation from '$lib/Navigation/index.svelte';
	import "../app.postcss";

</script>

<Navigation {categories}/>
<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
	<slot />
	<footer>
		<p>&copy; 2021 <a href="{website.url}">Brian Ketelsen</a></p>
	</footer>
  </div>




