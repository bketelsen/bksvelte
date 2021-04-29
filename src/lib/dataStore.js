import data from '../../_build/data.json';

export {data}

export const getArticle = async (  id ) => {
    const articles = data["articles"];
    var article = articles.find(a => {
        return a.id === id
    })
    if (article.profile_id) {
        article["profile"] = await getProfile(article.profile_id)
    }
    if (article.category_id) {
        article["category"] = await getCategory(article.category_id)
    }
    if (article.image_id) {
        article["image"] = await getImage(article.image_id)
    }
    console.log(article)

    return article;
};

export const getCategory = async (  id ) => {
    const categories = data["categories"];
    var category = categories.find(a => {
        return a.id === id
    })
    if (category.image_id) {
        category["image"] = await getImage(category.image_id)
    }
    return category;
};

export const getProfile = async (  id ) => {
    const profiles = data["profiles"];
    var profile = profiles.find(a => {
        return a.id === id
    })
    if (profile.image_id) {
        profile["image"] = await getImage(profile.image_id)
    }

    return profile;
};

export const getImage = async (  id ) => {
    const images = data["images"];
    var image = images.find(a => {
        return a.id === id
    })
    return image;
};

export const getWebsite = async (  id ) => {
    const websites = data["websites"];
    var website = websites.find(a => {
        return a.id === id
    })
    if (website.profile_id) {
        website["profile"] = await getProfile(website.profile_id)
    }
    return website;
};