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
	import DesktopMenu from '$lib/components/nav/DesktopMenu.svelte';
	import MobileMenu from '$lib/components/nav/MobileMenu.svelte';
	import SimpleCentered from '$lib/components/footers/SimpleCentered.svelte';

	let open = false;

	function toggleOpen(event) {
		open = !open;
	}

	import '../app.postcss';
</script>

<PageContainer>
	<NavBar slot="header">
		<DesktopMenu slot="desktop" navigation={site.primary_navigation} on:toggleopen={toggleOpen}>
			<h2 slot="brand" class="text-contrast-700 text-2xl">{site.brand_name}</h2>
		</DesktopMenu>
		<MobileMenu {open} slot="mobile" navigation={site.primary_navigation} />
	</NavBar>
	<slot />
	<SimpleCentered slot="footer" profile={site.profile} navigation={site.secondary_navigation} />
</PageContainer>
