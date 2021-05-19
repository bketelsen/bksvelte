import Image from "@11ty/eleventy-img";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const { image } = params;

	console.log(image)

	if (image) {
		return {
			body: {
				image
			}
		};
	}
}