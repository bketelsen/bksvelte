<script context="module">
	export const prerender = true;

</script>

<script>
	import Blog from '$lib/components/Sections/Blog/threecolumncard.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Blog title="latest" heading="Featured Articles" description="Here are some of the hottest articles on the blog"></Blog>