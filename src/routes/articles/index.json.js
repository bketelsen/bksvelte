import { api } from './_api';

// GET /articles.json
export const get = async (request) => {
	// request.context.userid comes from src/hooks.js
	const response = await api(request, `articles`);
	return response;
};

