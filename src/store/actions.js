import GameService from '../services/game_service.js';


export default {
  updateState({ commit }, state) {
    commit('UPDATE_STATE', state);
  },

  fetchRoundResults({ commit }, state) {
    commit('UPDATE_ROUND_RESULTS', state);
  },

  createSession({ commit }, name) {
    let gameService = new GameService();
    gameService.createSession(name).then(
      ({ token, name }) => {
        commit('UPDATE_ROUND_RESULTS', { token: token, username: name });
        console.log('session created');
      },
      () => {
        console.error('API: Failed to create session');
      },
     )
      .finally(() => {

    });
  },

  createGame({ commit }, sessionToken) {
    let gameService = new GameService();
    gameService.createGame(sessionToken).then(
      ({ pin }) => {
        commit('UPDATE_ROUND_RESULTS', { pin: pin });
        console.log('game created');
      },
      () => {
        console.error('API: Failed to create game');
      },
    )
      .finally(() => {

      });
  },

  gameStatus({ commit }, gamePin) {
    let gameService = new GameService();
    gameService.gameStatus(gamePin).then(
      ({ pin, status, sessions }) => {
        commit('UPDATE_GAME', { pin: pin, status: status, sessions: sessions });
        console.log('game status');
      },
      () => {
        console.error('API: Failed to get game status');
      },
    )
      .finally(() => {

      });
  },

  joinGame({ commit }, gamePin, sessionToken) {
    let gameService = new GameService();
    gameService.joinGame(gamePin, sessionToken).then(
      ({ pin, status, sessions }) => {
        commit('UPDATE_GAME', { pin: pin, status: status, sessions: sessions });
        console.log('game joined');
      },
      () => {
        console.error('API: Failed to join in');
      },
    )
      .finally(() => {

      });
  },
};