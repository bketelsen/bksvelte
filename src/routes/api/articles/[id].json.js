import  data  from '$lib/data.json';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({params}) {

	const { id } = params;
	const {articles} = data;

	const article = articles.find((a) => a.id === id)
	
	if (article) {
		return {
			body: {
				article
			}
		};
	}
}