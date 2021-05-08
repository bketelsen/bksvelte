import data from '../../data/.build/data.json';

export const getImage = (id) => {
	const { images } = data;
	var doc = images.find((a) => {
		return a.id === id;
	});
	return doc;
};
export const getArticle = (id) => {
	const { articles } = data;
	var doc = articles.find((a) => {
		return a.id === id;
	});

	if (doc.category_id) {
		const cat = getCategory(doc.category_id);
		doc['category'] = cat;
	}
	if (doc.profile_id) {
		const prf = getProfile(doc.profile_id);
		doc['profile'] = prf;
	}
	if (doc.image_id) {
		const img = getImage(doc.image_id);
		doc['image'] = img;
	}
	return doc;
};
export const getSection = (id) => {
	const { sections } = data;
	var doc = sections.find((a) => {
		return a.id === id;
	});

	if (doc.image_id) {
		const img = getImage(doc.image_id);
		doc['image'] = img;
	}
	return doc;
};
export const getProfile = (id) => {
	const { profiles } = data;
	var doc = profiles.find((a) => {
		return a.id === id;
	});
	if (doc.image_id) {
		const img = getImage(doc.image_id);
		doc['image'] = img;
	}
	return doc;
};

export const getCategory = (id) => {
	const { categories, articles } = data;
	var doc = categories.find((a) => {
		return a.id === id;
	});
	const catArticles = articles.filter((article) => article.category_id === id);
	doc['articles'] = catArticles;
	if (doc.image_id) {
		const img = getImage(doc.image_id);
		doc['image'] = img;
	}
	return doc;
};

export const getPage = (id) => {
	const { pages } = data;
	var doc = pages.find((a) => {
		return a.id === id;
	});
	if (doc.image_id) {
		const img = getImage(doc.image_id);
		doc['image'] = img;
	}
	
	return doc;
};

export const getWebsite = (id) => {
	const { websites } = data;
	var doc = websites.find((a) => {
		return a.id === id;
	});
	if (doc.profile_id) {
		const prf = getProfile(doc.profile_id);
		doc['profile'] = prf;
	}
	return doc;
};
const { articles } = data;
const fatArticles = articles.map(a => {
	return getArticle(a.id)
})

const { categories } = data;
const fatCategories = categories.map(c => {
	return getCategory(c.id)
})

const { profiles } = data;
const fatProfiles = profiles.map(p => {
	return getProfile(p.id)
})

const { pages } = data;
const fatPages = pages.map(p => {
	return getPage(p.id)
})

const { websites } = data;
const fatWebsites = websites.map(w => {
	return getWebsite(w.id)
})

const { sections } = data;
const fatSections = sections.map(s => {
	return getSection(s.id)
})

export const getArticles = () => {
	return fatArticles;
};

export const getCategories = () => {
	return fatCategories;
};

export const getProfiles = () => {
	return fatProfiles;
};

export const getPages = () => {
	return fatPages;
};

export const getWebsites = () => {
	return fatWebsites;
};

export const getSections = () => {
	return fatSections;
};
