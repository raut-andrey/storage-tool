class Storage {
  static getItem(name) {
    try {
      if (!name) { return; }

      const value = JSON.parse(localStorage.getItem(name));

      return value;
    } catch (err) {
      console.log('Error in getItem method of Storage class:\n', err);
      return null;
    }
  }

  static setItem(name, value) {
    try {
      if (!name) { return; }
      if (!value) {
        localStorage.removeItem(name);
        return;
      }

      localStorage.setItem(name, JSON.stringify(value));
    } catch (err) {
      console.log('Error in setItem method of Storage class:\n', err);
    }
  }

  static clear() {
    try {
      localStorage.clear();
    } catch (err) {
      console.log('Error in clear method of Storage class:\n', err);
    }
  }

  static key(key) {
    try {
      return localStorage.key(key);
    } catch (err) {
      console.log('Error in clear key method of Storage class:\n', err);
    }
  }

  static get length() {
    try {
      return localStorage.length;
    } catch (err) {
      console.log('Error in get length method of Storage class:\n', err);
    }
  }

  static get all() {
    try {
      const obj = {};

      for (let i = 0; i < this.length; i++) {
        const key = this.key(i);
        obj[key] = this.getItem(key);
      }

      return obj;
    } catch (err) {
      console.log('Error in get all of Storage class:\n', err);
    }
  }

  static set all(obj) {
    try {
      this.clear();
      if (!obj) { return; }

      for (let key in obj) {
        this.setItem(key, obj[key]);
      }
    } catch (err) {
      console.log('Error in set all method of Storage class:\n', err);
    }
  }
}

module.exports = Storage;
