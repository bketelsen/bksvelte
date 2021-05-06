<script>
	import Card from './Card.svelte';
	import {getArticle} from '$lib/dataStore'
    import Header from '$lib/containers/Header.svelte';
	export let title;
	export let heading;
	export let description;
	export let articles;
</script>

<Header {title} {heading} {description}>
    <div
class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
>
{#each articles as article (article.id)}
    <Card article={getArticle(article.id)} />
{/each}
</div>
</Header>
