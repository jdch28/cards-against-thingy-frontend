import state from './state';
import mutations from './mutations';
import actions from './actions';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions
});

export { state, mutations, actions };
export default store;