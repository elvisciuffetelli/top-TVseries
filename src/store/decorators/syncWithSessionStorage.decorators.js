/**
 * syncWithSessionStorage.decorators.js
 * Creates and exports a sessionStorage sync annotation to be used with global store container,
 */

import { createSaveDecorator } from 'mobx-decorators';

const synkWithSessionStorage = createSaveDecorator({
  storage: sessionStorage,
  storeName: 'top-series',
  serializer: {
    save: value => JSON.stringify(value),
    load: data => JSON.parse(data),
  },
});

export default synkWithSessionStorage;