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
       
        var item = this.data.find(a => {
            return a.id === id
        })
    
        return item;
    }
    async getAll() {
        await this._initialize();
        return this.data;
    }
    
}

export const articles = new BloxData('https://api.brian.dev/api/articles?_expand=category&_expand=profile');
export const websites = new BloxData('https://api.brian.dev/api/websites?_expand=profile');
export const pages = new BloxData('https://api.brian.dev/api/pages?_expand=image');
export const profiles = new BloxData('https://api.brian.dev/api/profiles?_expand=image');
export const categories = new BloxData('https://api.brian.dev/api/categories');
export const sections = new BloxData('https://api.brian.dev/api/sections');
export const feeds = new BloxData('https://api.brian.dev/api/feeds?_embed=feeditems');