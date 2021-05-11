<script>
	export let canonical = undefined;
	export let page = undefined;
  export let profile = undefined;
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
	{#if page}
		{#if page.title}
			<title>{page.title}</title>
			<meta property="og:title" content={page.title} />
			<meta name="twitter:title" content={page.title} />
		{/if}
		{#if page.excerpt}
			<meta name="description" content={page.excerpt} />
			<meta property="og:description" content={page.description} />
			<meta name="twitter:description" content={page.description} />
		{/if}

		{#if page.publish_date}
			<meta property="page:published_time" content={page.publish_date} />
		{/if}


		<meta property="og:type" content="website" />

		{#if page.category}
			<meta property="page:section" content={page.category.name} />
		{/if}

		{#if profile}
			<meta
				property="page:author"
				content={profile.first_name + ' ' + profile.last_name}
			/>
		{/if}

		{#if page.tags && page.tags.length}
			{#each page.tags as tag}
				<meta property="page:tag" content={tag} />
			{/each}
		{/if}

		{#if page.image}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:image" content={base + page.image.file_name} />
			{#if page.image.alt}
				<meta property="og:image:alt" content={page.image.alt} />
				<meta name="twitter:image:alt" content={page.image.alt} />
			{/if}
			{#if page.image.width}
				<meta property="og:image:width" content={page.image.width.toString()} />
			{/if}
			{#if page.image.height}
				<meta property="og:image:height" content={page.image.height.toString()} />
			{/if}

			<meta name="twitter:image" content={base + page.image.file_name} />
      <meta name="twitter:site" content="@bketelsen" />
      <meta name="twitter:creator" content="@bketelsen" />

		{/if}
	{/if}

</svelte:head>
