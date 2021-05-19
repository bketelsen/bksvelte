import  data  from '$lib/data.json';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {
	const {articles} = data;
	if (articles) {
		return {
			body: {
				articles
			}
		};
	}
}
