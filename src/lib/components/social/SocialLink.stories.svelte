<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SocialLink from './SocialLink.svelte';
</script>

<Meta
	title="Social/SocialLink"
	component={SocialLink}
	argTypes={{
		network: { control: 'text' },
		username: { control: 'text' },
		url: { control: 'text' }
	}}
/>

<Template let:args>
	<SocialLink {...args} />
</Template>

<Story
	name="Twitter"
	args={{
		network: 'twitter',
		username: 'rawkode',
		url: 'https://twitter.com/rawkode'
	}}
/>

<Story
	name="GitHub"
	args={{
		network: 'github',
		username: 'rawkode',
		url: 'https://github.com/rawkode'
	}}
/>
