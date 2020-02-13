import GameService from '../services/game_service.js';


export default {
  updateState({ commit }, state) {
    commit('UPDATE_STATE', state);
  },

  addLobbySubview({ commit }, state) {
    commit('UPDATE_LOBBY_SUBVIEWS_STATE', state);
  },

  fetchRoundResults({ commit }, state) {
    commit('UPDATE_ROUND_RESULTS', state);
  },

  createSession({ commit }, name) {
    let gameService = new GameService();
    gameService.createSession(name).then(
      ({ token, name }) => {
        commit('UPDATE_SESSION', {
          token: token,
          username: name
        });
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
        commit('UPDATE_GAME', { pin: pin });
        commit('UPDATE_LOBBY_SUBVIEWS_STATE', 'GameLobby');
        console.log('game created, this is pin', pin);
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

  joinGame({ commit }, { pin, session }) {
    let gameService = new GameService();
    gameService.joinGame(pin, session).then(
      ({ pin, status, sessions }) => {
        commit('UPDATE_GAME', { pin: pin, status: status, sessions: sessions });
        commit('UPDATE_LOBBY_SUBVIEWS_STATE', 'GameLobby');
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