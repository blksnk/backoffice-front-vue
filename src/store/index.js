import Vue from 'vue';
import Vuex from 'vuex';
import { DB_SET, SELECT_MODEL_NAME, UPDATE_MODEL_DATA } from './types';
import initFetch from '../helpers/initFetch.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: {
      modelNames: [],
      data: {},
      shemas: {},
    },
    selectedModelName: '',
  },
  mutations: {
    [DB_SET](state, payload) {
      state.db = payload;
    },
    [SELECT_MODEL_NAME](state, payload) {
      state.selectedModelName = payload;
    },
    [UPDATE_MODEL_DATA](state, { modelName, data }) {
      state.db.data[modelName] = data;
    },
  },
  actions: {
    async fetchDB({ commit }) {
      const db = await initFetch();
      commit(DB_SET, db);
      commit(SELECT_MODEL_NAME, db.modelNames[0]);
    },
  },
  modules: {},
});
