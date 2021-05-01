import { articles } from "$lib/dataStore";

export const get = async (request) => {

	const response = await articles.getOne(request.params.id);
    return {
		status: 200,
		body: response
	};
};
