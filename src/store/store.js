/**
 * Store.js
 * Creates and exports a new store instance.
 * Every propetry of the store are observable (see @observable mobx)
 * and should be synchronized with localStorage or sessionStorage
 * with @syncWithLocalStorage and syncWithSessionStorage decorators.
 */

import { observable } from 'mobx';

import syncWithLocalStorage from './decorators/syncWithLocalStorage.decorators';
//import syncWithSessionStorage from './decorators/syncWithSessionStorage.decorators';

class Store {

  @observable
  @syncWithLocalStorage
  dataProva = "";


/*   @syncWithSessionStorage
  @observable
  taskFilters = {
    checklist: [],
    status: [],
    roles: []
  };

  @observable
  taskDetail = {};

  @observable
  @syncWithSessionStorage
  notificationsPageNew = {}; */
}

export default new Store();