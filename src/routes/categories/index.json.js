import { categories } from "$lib/dataStore";

export const get = async () => {

	const response = await categories.getAll();
    return {
		status: 200,
		body: response
	};
};
