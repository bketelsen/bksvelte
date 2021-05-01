<script context="module">
	export const prerender = true;

</script>

<script>
	import Header from '$lib/components/Sections/Headers/centered.svelte';
	import Hero from '$lib/components/Sections/Hero/card.svelte';
	import ScreenshotFeature from '$lib/components/Sections/Features/screenshot.svelte';
	import GridFeature from '$lib/components/Sections/Features/grid.svelte';
	import Testimonial from '$lib/components/Testimonials/simplecentered.svelte';
	import BlogSection from '$lib/components/Sections/Blog/threecolumncard.svelte'
	import CTASection  from '$lib/components/Sections/CTA/centered.svelte'
	import Footer from '$lib/components/Sections/Footers/social.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
