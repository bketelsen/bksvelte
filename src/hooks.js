import {articles} from '$lib/dataStore';
import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

export const getContext = (request) => {
	const cookies = cookie.parse(request.headers.cookie || '');

	return {
		is_new: !cookies.userid,
		userid: cookies.userid || uuid()
	};
};

export const handle = async ({ request, render }) => {

	// TODO https://github.com/sveltejs/kit/issues/1046
	const response = await render({
		...request,
		method: (request.query.get('_method') || request.method).toUpperCase()
	});

	const { is_new, userid } = request.context;

	if (is_new) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		return {
			...response,
			headers: {
				...response.headers,
				'set-cookie': `userid=${userid}; Path=/; HttpOnly`
			}
		};
	}

	return response;
};



  
  export async function getSession() {
	const article_pages = await Promise.all(
        Object.entries(import.meta.glob('../data/articles/*.svx')).map(
            async ([path, page]) => {
                const { metadata } = await page();
                const filename = path.split('/').pop();
                return { ...metadata, filename };
            }
        )
    );
	const session = {
	  article_data:  await articles.getAll(),
	  article_pages: await article_pages,

	}
	return session
  };