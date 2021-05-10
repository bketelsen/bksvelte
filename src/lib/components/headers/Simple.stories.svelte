<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Simple from './Simple.svelte';
</script>

<Meta
	title="Headers/Simple"
	component={Simple}
	argTypes={{
		title: { control: 'text' },
		description: { control: 'text' }
	}}
/>

<Template let:args>
	<Simple {...args} />
</Template>

<Story
	name="Basic"
	args={{
		title: 'My Title',
		description: 'My Description'
	}}
/>
