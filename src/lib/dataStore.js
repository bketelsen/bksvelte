class BloxData {
  constructor(sourceURL) {
    this.dataSource = sourceURL;
  }
  async _doInitialize() {
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

console.log(import.meta.env.VITE_API_BASE);
export const articles = new BloxData(`${import.meta.env.VITE_API_BASE}/articles?_expand=category&_expand=profile&_expand=image`);
export const websites = new BloxData(`${import.meta.env.VITE_API_BASE}/websites?_expand=profile`);
export const pages = new BloxData(`${import.meta.env.VITE_API_BASE}/pages?_expand=image`);
export const profiles = new BloxData(`${import.meta.env.VITE_API_BASE}/profiles?_expand=image`);
export const categories = new BloxData(`${import.meta.env.VITE_API_BASE}/categories?_embed=articles`);
export const sections = new BloxData(`${import.meta.env.VITE_API_BASE}/sections`);
export const feeds = new BloxData(`${import.meta.env.VITE_API_BASE}/feeds?_embed=feeditems`);