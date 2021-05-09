<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import {getWebsite} from '$lib/dataStore';

  // see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
			const site =  getWebsite('brian.dev')
			return {
				props: { site: site }
			};
	};
</script>
<script>
	export let site;

	import { PageContainer, NavBar, DesktopMenu, MobileMenu, SimpleCentered } from 'components'

	let open = false;

	function toggleOpen(event) {
		open = !open;
	}

	import "../app.postcss";
	

</script>

<PageContainer>
	<NavBar slot="header"  >
		<DesktopMenu slot="desktop" navigation={site.primary_navigation}
			on:toggleopen={toggleOpen}	
			>
			<h2 slot="brand" class="text-contrast-700 text-2xl">{site.brand_name}</h2>
		</DesktopMenu>
		<MobileMenu  {open} slot="mobile" navigation={site.primary_navigation}></MobileMenu>
	</NavBar>
	<slot></slot>
	<SimpleCentered slot="footer" navigation={site.secondary_navigation}/>
</PageContainer>