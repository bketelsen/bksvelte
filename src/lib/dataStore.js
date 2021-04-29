

class Blox{
    constructor(sourceURL){
        this.dataSource = sourceURL;
    }
    async _doInitialize() {
        console.log("Loading data!")
        this.data = await (await fetch(this.dataSource)).json();
      }
    
      async _initialize() {
        // prevent concurrent calls firing initialization more than once
        if (!this.initializationPromise) {
          this.initializationPromise = this._doInitialize();
        }
        return this.initializationPromise;
      }
    
    async getArticle(id) {
        await this._initialize();
        const articles = this.data["articles"];
        var article = articles.find(a => {
            return a.id === id
        })
        if (article.profile_id) {
            article["profile"] = this.getProfile(article.profile_id)
        }
        if (article.category_id) {
            article["category"] = this.getCategory(article.category_id)
        }
        if (article.image_id) {
            article["image"] = this.getImage(article.image_id)
        }
        console.log(article)
    
        return article;
    }
   async getCategory(  id ) {
        await this._initialize();
        const categories = this.data["categories"];
        var category = categories.find(a => {
            return a.id === id
        })
        if (category.image_id) {
            category["image"] = this.getImage(category.image_id)
        }
        return category;
    }
    async getProfile (  id ) {
        await this._initialize();
        const profiles = this.data["profiles"];
        var profile = profiles.find(a => {
            return a.id === id
        })
        if (profile.image_id) {
            profile["image"] = this.getImage(profile.image_id)
        }
    
        return profile;
    }
    async getImage (  id ) {
        await this._initialize();
        const images = this.data["images"];
        var image = images.find(a => {
            return a.id === id
        })
        return image;
    }
    async getWebsite (  id ) {
        await this._initialize();

        const websites = this.data["websites"];
        var website = websites.find(a => {
            return a.id === id
        })
        if (website.profile_id) {
            website["profile"] = this.getProfile(website.profile_id)
        }
        return website;
    }
    
    
}

export const blox = new Blox('https://github.com/bketelsen/bkml/releases/download/blox/data.json');

class BloxData{
    constructor(sourceURL){
        this.dataSource = sourceURL;
    }
    async _doInitialize() {
        console.log("Loading data!")
        this.data = await (await fetch(this.dataSource)).json();
      }
    
      async _initialize() {
        // prevent concurrent calls firing initialization more than once
        if (!this.initializationPromise) {
          this.initializationPromise = this._doInitialize();
        }
        return this.initializationPromise;
      }
    
    async getOne(id) {
        await this._initialize();
       
        var article = this.data.find(a => {
            return a.id === id
        })
    
        return article;
    }
    async getAll() {
        await this._initialize();
        return this.data;
    }
    
}

export const articles = new BloxData('https://api.brian.dev/api/articles?_expand=category&_expand=profile');
