/**
 * syncWithLocalStorage.decorators.js
 * Creates and exports a localstorage sync annotation to be used with global store container,
 */

import { createSaveDecorator } from 'mobx-decorators';

const synkWithLocalStorage = createSaveDecorator({
  storage: localStorage,
  storeName: 'top-series',
  serializer: {
    save: value => JSON.stringify(value),
    load: data => JSON.parse(data),
  },
});

export default synkWithLocalStorage;