<script>
	import Card from './card.svelte';
	import {resolveArticle} from '$lib/dataStore'
	export let title;
	export let heading;
	export let description;
	export let articles;
</script>

<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
	<div class="relative">
		<div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
			<h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{title}</h2>
			<p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
				{heading}
			</p>
			<p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
				{description}
			</p>
		</div>
		<div
			class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
		>
			{#each articles as article (article.id)}
				<Card article={resolveArticle(article.id)} />
			{/each}
		</div>
	</div>
</div>
