<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/websites.json`);
		if (res.ok) {
			const { websites } = await res.json();
			return {
				props: { site: websites[0] }
			};
		}
	};
</script>

<script>
	export let site;
	import PageContainer from '$lib/components/containers/PageContainer.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import SimpleCentered from '$lib/components/footers/SimpleCentered.svelte';



	import '../app.postcss';
</script>

<PageContainer>
	<NavBar title="Brian Ketelsen" slot="header" navigation={site.primary_navigation} />
	<slot />
	<SimpleCentered slot="footer" profile={site.profile} navigation={site.secondary_navigation} />
</PageContainer>
