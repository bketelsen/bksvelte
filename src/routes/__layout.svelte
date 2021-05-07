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
	const navigation = [
		{name:"Home", route:"/"},
		{name:"Blog", route:"/articles"},
		{name:"Categories", route:"/categories"},
		{name:"About", route:"/about"},
	]
	import { PageContainer, NavBar, DesktopMenu, MobileMenu } from 'components'
	import Footer from '$lib/footer/Footer.svelte';

	import "../app.postcss";
	const keepStylesPlease = [
		'text-contrast-50',
		'text-contrast-100',
		'text-contrast-200',
		'text-contrast-300',
		'text-contrast-400',
		'text-contrast-500',
		'text-contrast-600',
		'text-contrast-700',
		'text-contrast-800',
		'text-contrast-900',
		'text-main-50',
		'text-main-100',
		'text-main-200',
		'text-main-300',
		'text-main-400',
		'text-main-500',
		'text-main-600',
		'text-main-700',
		'text-main-800',
		'text-main-900',
		'border-bg-50',
		'border-bg-100',
		'border-bg-200',
		'border-bg-300',
		'border-bg-400',
		'border-bg-500',
		'border-bg-600',
		'border-bg-700',
		'border-bg-800',
		'border-bg-900',
		'border-contrast-50',
		'border-contrast-100',
		'border-contrast-200',
		'border-contrast-300',
		'border-contrast-400',
		'border-contrast-500',
		'border-contrast-600',
		'border-contrast-700',
		'border-contrast-800',
		'border-contrast-900',
		'border-main-50',
		'border-main-100',
		'border-main-200',
		'border-main-300',
		'border-main-400',
		'border-main-500',
		'border-main-600',
		'border-main-700',
		'border-main-800',
		'border-main-900',
		'bg-bg-50',
		'bg-bg-100',
		'bg-bg-200',
		'bg-bg-300',
		'bg-bg-400',
		'bg-bg-500',
		'bg-bg-600',
		'bg-bg-700',
		'bg-bg-800',
		'bg-bg-900',
		'prose-contrast',
	]

</script>

<PageContainer>
	<NavBar slot="header" {navigation} >
		<DesktopMenu slot="desktop" {navigation}>
			<h2 slot="brand" class="text-contrast-700 text-2xl">Brian Ketelsen</h2>
		</DesktopMenu>
		<MobileMenu slot="mobile" {navigation}></MobileMenu>
	</NavBar>
	<slot></slot>
	<Footer slot="footer"></Footer>
</PageContainer>