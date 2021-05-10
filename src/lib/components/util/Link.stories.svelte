<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';
</script>

<Meta
	title="Util/Link"
	component={Link}
	argTypes={{
		href: { control: 'text' },
		label: { control: 'text' },
		blank: { control: 'bool' }
	}}
/>

<Template let:args>
	<Link {...args}>Some Link</Link>
</Template>

<Story
	name="Google with Blank"
	args={{
		href: 'https://google.com',
		label: 'Google',
		blank: true
	}}
/>

<Story
	name="Google without Blank"
	args={{
		href: 'https://google.com',
		label: 'Google',
		blank: false
	}}
/>

<Story
	name="Inpage Link"
	args={{
		href: 'Stuff',
		label: 'Stuff in Page',
		blank: false
	}}
/>
