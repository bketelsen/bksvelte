/*
	This module is used by the /todos.json and /todos/[uid].json
	endpoints to make calls to api.svelte.dev, which stores todos
	for each user. The leading underscore indicates that this is
	a private module, _not_ an endpoint — visiting /todos/_api
	will net you a 404 response.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

import { articles } from "$lib/dataStore";

export async function getAll() {

    const aa = await articles.getAll();
	return {
		status: 200,
		body: aa
	}
}
