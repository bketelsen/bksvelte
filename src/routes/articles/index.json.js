import { getAll } from './_api';

export const get = async (request) => {

	const response = await getAll();
	return response;
};
