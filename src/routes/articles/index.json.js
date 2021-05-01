import { articles } from "$lib/dataStore";

export const get = async () => {

	const response = await articles.getAll();
    return {
		status: 200,
		body: response
	};
};
