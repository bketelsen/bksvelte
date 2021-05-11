<script>
	export let canonical = undefined;
	export let article = undefined;
	export let keywords = undefined;
	export let noindex = false;
	export let nofollow = false;
  const base = import.meta.env.VITE_ASSET_BASE;

//  <meta name="twitter:site" content={twitter.site} />

</script>

<svelte:head>
	<meta
		name="robots"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>
	<meta
		name="googlebot"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	{#if article}
		{#if article.title}
			<title>{article.title}</title>
			<meta property="og:title" content={article.title} />
			<meta name="twitter:title" content={article.title} />
		{/if}
		{#if article.excerpt}
			<meta name="description" content={article.excerpt} />
			<meta property="og:description" content={article.description} />
			<meta name="twitter:description" content={article.description} />
		{/if}

		{#if article.publish_date}
			<meta property="article:published_time" content={article.publish_date} />
		{/if}

		{#if article.last_edit_date}
			<meta property="article:modified_time" content={article.last_edit_date} />
		{/if}

		<meta property="og:type" content="article" />

		{#if article.category}
			<meta property="article:section" content={article.category.name} />
		{/if}

		{#if article.profile}
			<meta
				property="article:author"
				content={article.profile.first_name + ' ' + article.profile.last_name}
			/>
		{/if}

		{#if article.tags && article.tags.length}
			{#each article.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}

		{#if article.image}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:image" content={base + article.image.file_name} />
			{#if article.image.alt}
				<meta property="og:image:alt" content={article.image.alt} />
				<meta name="twitter:image:alt" content={article.image.alt} />
			{/if}
			{#if article.image.width}
				<meta property="og:image:width" content={article.image.width.toString()} />
			{/if}
			{#if article.image.height}
				<meta property="og:image:height" content={article.image.height.toString()} />
			{/if}

			<meta name="twitter:image" content={base + article.image.file_name} />
		{/if}
	{/if}

</svelte:head>
