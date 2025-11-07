
  class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const now = Date.now();

    const existing = this.cache.get(key);
    const isUnexpired = existing && existing.expireTime > now;

    this.cache.set(key, {
      value,
      expireTime: now + duration,
    });

    return !!isUnexpired;
  }

  get(key) {
    const now = Date.now();
    const data = this.cache.get(key);

    if (!data) return -1;

    if (data.expireTime > now) {
      return data.value;
    } else {
      this.cache.delete(key);
      return -1;
    }
  }

  count() {
    const now = Date.now();
    let count = 0;

    for (const [key, data] of this.cache.entries()) {
      if (data.expireTime > now) count++;
      else this.cache.delete(key);
    }

    return count;
  }
}


/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */


/** 
 * @param {number} key
 * @return {number} value associated with key
 */


/** 
 * @return {number} count of non-expired keys
 */


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */