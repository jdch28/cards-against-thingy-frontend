export default {
  updateState({ commit }, state) {
    commit('UPDATE_STATE', state);
  },
  fetchRoundResults({ commit }, state) {
    commit('UPDATE_ROUND_RESULTS', state);
  },
  updateName({ commit }, state) {
    commit('UPDATE_NAME', state);
  },
};