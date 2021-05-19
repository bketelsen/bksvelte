import { get as apiGet } from '$lib/api';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({params}) {

	const { id } = params;
	const article = await apiGet(`articles/${id}?_expand=category&_expand=image`);		

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}