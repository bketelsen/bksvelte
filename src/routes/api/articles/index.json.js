import { get as apiGet } from '$lib/api';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {
	const articles = await apiGet("articles?_expand=category&_expand=image");
	if (articles) {
		return {
			body: {
				articles
			}
		};
	}

}