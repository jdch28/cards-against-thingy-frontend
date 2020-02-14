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

  // plebStandby() {
  //   let roundService = new RoundService(),
  //     status = {};

  //   while (status.label === 'waiting for plebs') {
  //     // cada 0.5 segundos
  //     status = roundService.status();
  //   }

  //   // update view to waiting for czar

  //   while (status.label === 'waiting for czar') {
  //     // cada 0.5 segundos
  //     status = roundService.status();
  //   }

  //   // make into case
  //   if (status.label === 'complete') {
  //     // show scoreboard view
  //   } else if (status.label === 'waiting for plebs') {
  //     this.setupRound();
  //   } else {
  //     // nope lol
  //   }
  // }

  // czarStandby() {
  //   let roundService = new RoundService(),
  //     status = {label: 'waiting for plebs'};

  //   while (status.label === 'waiting for plebs') {
  //     // cada 0.5 segundos
  //     status = roundService.status();
  //   }

  //   if (status.label === 'waiting for czar') {
  //     roundService.requestRoundCandidates();
  //     // show czar selection view
  //   } else {
  //     // nope lol
  //   }
  // }

  // plebSubmit(cardId) {
  //   let roundService = new RoundService();

  //   roundService.submitCandidate(cardId);

  //   this.plebStandby();
  // }

  // czarSubmit(cardId) {
  //   let roundService = new RoundService();

  //   roundService.submitWinner(cardId);

  //   this.setupRound();
  // }



};