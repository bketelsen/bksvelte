<script context="module">
	export const prerender = true;

	const slugRegex = /([a-z-]+)(?:\.svx)$/;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ page, session }) => {
		const articles = session.article_data;
		const { id } = page.params;
		const slug = id;
		var doc = articles.find((a) => {
			return a.id === id;
		});
		const pages = session.article_pages;
		const slugs = Object.fromEntries(
			pages.map((page) => [page.filename.match(slugRegex)[1], page])
		);

        if (slug in slugs) {
            const pages = Object.fromEntries(
                await Promise.all(
                    Object.entries(import.meta.glob('../../../data/articles/*.svx')).map(
                        async ([path, page]) => {
                            const filename = path.split('/').pop();
                            const slug = filename.match(slugRegex)[1];
                            return [slug, page];
                        }
                    )
                )
            );

            const { default: Rendered } = await pages[slug]();

            return {
                props: {
					article: doc,
                    title: slugs[slug].title,
                    description: slugs[slug].description,
                    Rendered,
                },
            };
        } else {
            // not found
            return {
                status: 404,
                error: new Error('Not found'),
            };
        }
    }
</script>

<script>
	export let article;
	export let Rendered;

	import Content from '$lib/components/Sections/Content/centered.svelte';

</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<Rendered />

<style>
</style>
