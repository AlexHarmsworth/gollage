export default class Cache {
  cache = [];

  constructor(config) {
    const { cacheKey } = config;
    if (cacheKey) this.cacheKey = cacheKey;
    this.hydrateCache();
  }

  hydrateCache() {
    this.cache = JSON.parse(window.localStorage.getItem(this.cacheKey)) || [];
  }

  get() {
    return this.cache;
  }

  set(val) {
    this.cache = val;
    this.save();
  }

  remove(id) {
    const newArr = this.cache.filter(gif => gif.id !== id);
    this.cache = newArr;
  }

  save() {
    window.localStorage.setItem(this.cacheKey, JSON.stringify(this.cache));
  }

  validateCache(ids) {
    if (!ids) return false;
    const idArr = ids.split(",");
    return idArr.length === this.cache.length;
  }
}