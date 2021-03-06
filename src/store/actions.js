import GameService from '../services/game_service.js';
import RoundService from '../services/round_service.js';
import { ROUND_WAITING_FOR_CZAR, ROUND_WAITING_FOR_PLEBS, GAME_COMPLETE } from '../constants.js';

export default {
  updateState({ commit }, state) {
    commit('UPDATE_STATE', state);
  },

  addLobbySubview({ commit }, state) {
    commit('UPDATE_LOBBY_SUBVIEWS_STATE', state);
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
        commit('UPDATE_PIN_GAME', pin);
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

  gameStatus({ commit }, { gamePin, onFinally}) {
    let gameService = new GameService();
    gameService.gameStatus(gamePin).then(
      ({ pin, status, sessions, scores }) => {
        commit('UPDATE_GAME', { pin: pin, status: status, sessions: sessions, scores: scores });
      },
      () => {
        console.error('API: Failed to get game status');
      },
    )
      .finally(() => {
        onFinally();
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

  updateGame({ commit }, game) {
      commit('UPDATE_GAME', game);
  },

  setupRound({commit, dispatch}, gameData) {
    let roundService = new RoundService();
    roundService.getCurrent(gameData.gamePin, gameData.token).then(({czar_token, player_hand, last_round, black_card, round_number}) => {
        commit('UPDATE_OLD_STATE', gameData.oldState);
        commit('UPDATE_ROUND', { blackCard: black_card, round: round_number });
        commit('UPDATE_WINNER', last_round.winner);
        commit('UPDATE_PLAYER', { hand: player_hand, score: last_round.score });
        commit('UPDATE_GAME_CURRENT_CZAR', czar_token);

        if(gameData.skipResultView) {
          console.log('JD is so rude', gameData.skipResultView);
          dispatch('showPlayViews', { czar: czar_token, gameData: gameData });
        } else {
          console.log('JD is actually kinda nice', gameData.skipResultView);
          commit('UPDATE_STATE', 'RoundResultView');
        }
    });
    // show round result (or straight to play if first round)
  },

  showPlayViews({commit, dispatch}, { czar, gameData }) {
    if (czar === gameData.token) {
      commit('UPDATE_STATE', 'CzarView');
      dispatch('czarStandby', gameData);
    } else {
      commit('UPDATE_STATE', 'PlayerSelectionView');
      dispatch('plebStandby', gameData);
    }
  },

  plebStandby({ commit, dispatch }, params) {
    let roundService = new RoundService(),
      roundStatus = '',
      pullingRound,
      gameStatus = '',
      pullingGame;

    pullingRound = setInterval(() => {
      roundService.status(params.gamePin, params.token).then(({ round_status }) => {
        roundStatus = round_status;
        if (roundStatus !== ROUND_WAITING_FOR_PLEBS) {
          clearInterval(pullingRound);
          commit('UPDATE_ROUND_STATUS', ROUND_WAITING_FOR_CZAR)
          commit('UPDATE_STATE', 'PlayerWaitingView');

          pullingGame = setInterval(() => {
            roundService.status(params.gamePin, params.token).then(({ round_status, game_status }) => {
              roundStatus = round_status;
              gameStatus = game_status;

              if (gameStatus === GAME_COMPLETE) {
                clearInterval(pullingGame);
                dispatch('gameStatus', {
                      gamePin: params.gamePin,
                      onFinally: function(){ commit('UPDATE_STATE', 'GameResultView');}});
              } else if (roundStatus !== ROUND_WAITING_FOR_CZAR) {
                clearInterval(pullingGame);
                dispatch('setupRound', params);
                console.log("params", params);
              }
            });
          }, 500)
        }
      });
    }, 500)

    // update view to waiting for czar


    // make into case
  },

  // type: "Round"
  // pin: "AA84"
  // round_status: "waiting_for_plebs"
  // game_status: "ready"
  czarStandby({ commit }, params) {
    let roundService = new RoundService(),
      roundStatus = '',
      pulling;
      console.log('round_status');
      pulling = setInterval(() => {
        roundService.status(params.gamePin, params.token).then(({ round_status }) => {
          roundStatus = round_status;
          if (roundStatus === ROUND_WAITING_FOR_CZAR) {
            clearInterval(pulling);
            roundService.requestRoundCandidates(params.gamePin, params.token).then(({cards}) => {
              commit('UPDATE_ROUND_CANDIDATE_CARDS', cards);
              commit('UPDATE_STATE', 'CzarSelectionView');
            });
          }
        });
      }, 5000)

  },

  plebSubmit({ commit, dispatch }, params) {
    let roundService = new RoundService();
      roundService.submitCandidate(params.gamePin, params.token, params.cardId).then(() => {
          commit('UPDATE_STATE', 'PlayerWaitingView');
          dispatch('plebStandby', params);
        },
        () => { console.error('API: Failed to send a card'); },
      )
        .finally(() => {
      });
  },


};