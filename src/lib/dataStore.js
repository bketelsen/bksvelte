import data from '../../data/.build/data.json';

export const getArticles = () => {
    const { articles } = data;
    return articles
}

export const getCategories = () => {
  const { categories } = data;
  return categories
}
export const getProfiles = () => {
  const { profiles } = data;
  return profiles
}
export const getPages = () => {
  const { pages } = data;
  return pages
}
export const getWebsites = () => {
  const { websites } = data;
  return websites
}

export const getArticle = (id) => {
  const { articles } = data;
  var doc = articles.find((a) => {
    return a.id === id;
  });

  if (doc.category_id) {
    const cat = getCategory(doc.category_id)
    doc["category"] = cat
  }
  if (doc.profile_id) {
    const prf = getProfile(doc.profile_id)
    doc["profile"] = prf
  }
  if (doc.image_id) {
    const img = getImage(doc.image_id)
    doc["image"] = img
  }
  return doc
}


export const getProfile = (id) => {
  const { profiles } = data;
  var doc = profiles.find((a) => {
    return a.id === id;
  });
  return doc
}

export const getCategory = (id) => {
  const { categories } = data;
  var doc = categories.find((a) => {
    return a.id === id;
  });
  return doc
}

export const getPage = (id) => {
  const { pages } = data;
  var doc = pages.find((a) => {
    return a.id === id;
  });
  return doc
}
export const getImage = (id) => {
  const { images } = data;
  var doc = images.find((a) => {
    return a.id === id;
  });
  return doc
}
export const getWebsite = (id) => {
  const { websites } = data;
  var doc = websites.find((a) => {
    return a.id === id;
  });
  if (doc.profile_id) {
    const prf = getProfile(doc.profile_id)
    doc["profile"] = prf
  }
  return doc
}