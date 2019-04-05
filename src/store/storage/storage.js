

class Storage {
  static getFromSession(key) {
    const value = window.sessionStorage.getItem(`top-series:${key}`);
    return JSON.parse(value);
  }

  static getFromLocal(key) {
    const value = window.localStorage.getItem(`top-series:${key}`);
    return JSON.parse(value);
  }

  static setToSession(key, value) {
    const stringedValue = JSON.stringify(value);
    window.sessionStorage.setItem(`top-series:${key}`, stringedValue);
  }

  static setToLocal(key, value) {
    const stringedValue = JSON.stringify(value);
    window.localStorage.setItem(`top-series:${key}`, stringedValue);
  }

  static removeFromSession(key) {
    window.sessionStorage.removeItem(`top-series:${key}`);
  }

  static removeFromLocal(key) {
    window.localStorage.removeItem(`top-series:${key}`);
  }

  static cleanSession() {
    window.sessionStorage.clear();
  }

  static cleanLocal() {
    window.localStorage.clear();
  }
}

export default Storage;