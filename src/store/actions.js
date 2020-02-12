export default {
  updateState({ commit }, state) {
    commit('UPDATE_STATE', state);
  },
  fetchRoundResults({ commit }, state) {
    commit('UPDATE_ROUND_RESULTS', state);
  }
};