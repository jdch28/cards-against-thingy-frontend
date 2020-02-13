
export default {
  UPDATE_STATE(state, current) {
    state.currentState = current;
  },

  UPDATE_LOBBY_SUBVIEWS_STATE(state, lobbySubview) {
    state.lobbySubviews.push(lobbySubview);
  },

  UPDATE_ROUND_RESULTS(state, current) {
    state.roundResults = current;
  },

  UPDATE_NAME(state, current) {
    state.currentState = current;
  },

  UPDATE_SESSION(state, session) {
    state.session = session;
  },

  UPDATE_GAME(state, game) {
    state.game = game;
  },
};
