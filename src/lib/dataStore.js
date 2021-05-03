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

export const resolveArticle = (id) => {
  const { articles } = data;
  var doc = articles.find((a) => {
    return a.id === id;
  });

  if (doc.category_id) {
    const cat = resolveCategory(doc.category_id)
    doc["category"] = cat
  }
  if (doc.profile_id) {
    const prf = resolveProfile(doc.profile_id)
    doc["profile"] = prf
  }
  if (doc.image_id) {
    const img = resolveImage(doc.image_id)
    doc["image"] = img
  }
  return doc
}


export const resolveProfile = (id) => {
  const { profiles } = data;
  var doc = profiles.find((a) => {
    return a.id === id;
  });
  return doc
}

export const resolveCategory = (id) => {
  const { categories } = data;
  var doc = categories.find((a) => {
    return a.id === id;
  });
  return doc
}

export const resolvePages = (id) => {
  const { pages } = data;
  var doc = pages.find((a) => {
    return a.id === id;
  });
  return doc
}
export const resolveImage = (id) => {
  const { images } = data;
  var doc = images.find((a) => {
    return a.id === id;
  });
  return doc
}