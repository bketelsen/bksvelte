import { api } from './_api';

// GET /articles/:uid.json
export const get = async (request) => {
	return api(request, `articles/${request.params.id}`);
};
