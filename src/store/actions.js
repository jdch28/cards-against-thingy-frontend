import GameService from '../services/game_service.js';
import RoundService from '../services/round_service.js';
import { ROUND_WAITING_FOR_CZAR, ROUND_WAITING_FOR_PLEBS, ROUND_COMPLETE, GAME_WAITING_FOR_PLEBS, GAME_COMPLETE } from '../constants.js';

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

  updateSelectedCardId({ commit }, state) {
    commit('UPDATE_SELECTED_CARD_ID', state);
  },

  updatePlayerHand({ commit }, state) {
    commit('UPDATE_PLAYER_HAND', state);
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


  // TODO: todos estos metodos

  // setupRound() {
  //   let roundService = new RoundService(),
  //     current = roundService.getCurrent();

  //   if (current.czar_session === current_session) {
  //     // setup czar view
  //   } else {
  //     // setup player selection view
  //     this.czarStandby()
  //   }

  //   // show round result (or straight to play if first round)
  // }

  plebStandby({ commit }, params) {
    let roundService = new RoundService(),
      roundStatus = '',
      gameStatus = '';

    while (roundStatus === ROUND_WAITING_FOR_PLEBS) {
      // cada 0.5 segundos
      roundService.status(params.pin, params.token).then((round_status, game_status) => {
        roundStatus = round_status;
        gameStatus = game_status;
      });
    }

    // update view to waiting for czar
    commit('UPATE_ROUND_STATUS', ROUND_WAITING_FOR_CZAR)
    commit('UPDATE_STATE', 'PlayerWaitingView');

    while (roundStatus === ROUND_WAITING_FOR_CZAR) {
      // cada 0.5 segundos
      roundService.status(params.pin, params.token).then((round_status, game_status) => {
        roundStatus = round_status;
        gameStatus = game_status;
      });
    }

    // make into case
    if (gameStatus === GAME_COMPLETE) {
      commit('UPDATE_STATE', 'PlayerWaitingView');
    } else if (gameStatus === GAME_WAITING_FOR_PLEBS) {
      this.setupRound();
    } else {
      // nope lol
    }
  },

  czarStandby({ commit }, params) {
    let roundService = new RoundService(),
      roundStatus = '';

    while (roundStatus === ROUND_WAITING_FOR_PLEBS) {
      // cada 0.5 segundos
      roundService.status(params.pin, params.token).then((round_status) => {
        roundStatus = round_status;
      });
    }

    if (roundStatus === ROUND_WAITING_FOR_CZAR) {
        roundService.requestRoundCandidates().then((cards) => {
          commit('UPDATE_ROUND_CANDIDATE_CARDS', cards);
          commit('UPDATE_STATE', 'CzarSelectionView');
        });
    } else {
      // nope lol
    }
  },

  plebSubmit({ commit, dispatch }, params) {
    let roundService = new RoundService();
      roundService.submitCandidate(params.pin, params.token, params.cardId).then(() => {
          commit('UPDATE_STATE', 'PlayerWaitingView');
          dispatch('plebStandby', params);
          //this.plebStandby();
        },
        () => { console.error('API: Failed to send a card'); },
      )
        .finally(() => {
      });
  }

  // czarSubmit(cardId) {
  //   let roundService = new RoundService();

  //   roundService.submitWinner(cardId); //card session token

  //   this.setupRound();
  // }



};