import { categories } from "$lib/dataStore";

export const get = async (request) => {

	const response = await categories.getOne(request.params.id);
    return {
		status: 200,
		body: response
	};
};
