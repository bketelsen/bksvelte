<script>
	import { ArticleCard, BodyWithHeader, CardGroup } from 'components';
	import { getArticle } from '$lib/dataStore';
	export let title;
	export let heading;
	export let description;
	export let articles;
</script>

<BodyWithHeader {title} {heading} {description}>
	<CardGroup>
		{#each articles as article (article.id)}
			<ArticleCard article={getArticle(article.id)} />
		{/each}
	</CardGroup>
</BodyWithHeader>
