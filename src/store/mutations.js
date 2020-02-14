
export default {
  UPDATE_STATE(state, current) {
    state.currentState = current;
  },

  UPDATE_LOBBY_SUBVIEWS_STATE(state, lobbySubview) {
    state.lobbySubviews.push(lobbySubview);
  },

  UPDATE_ROUND_STATUS(state, status) {
    state.roundState.status = status;
  },

  UPDATE_ROUND_CANDIDATE_CARDS(state, candidateCards) {
    state.roundState.candidateCards = candidateCards;
  },

  UPDATE_OLD_STATE(state) {
    state.oldState.blackCard = state.roundState.blackCard;
    state.oldState.czar = state.game.czar;
    state.oldState.round = state.roundState.index;
  },

   UPDATE_ROUND(state, { blackCard, round }) {
    state.roundState.blackCard = blackCard;
    state.roundState.index = round;
  },

  UPDATE_WINNER(state, winner) {
    state.roundWinner = winner;
  },

  UPDATE_PLAYER(state, {score, hand}) {
    state.player.score = score;
    state.player.hand = hand;
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

  UPDATE_CURRENT_CZAR(state, czar) {
    state.game.czar = czar;
  },

  UPDATE_SELECTED_CARD_ID(state, selectedCard) {
    state.player.selectedCard.id = selectedCard;
  },

  UPDATE_PLAYER_HAND(state) {
    var selectedIndex = state.player.hand.findIndex(function(i){
      return (i.id === state.player.selectedCard.id);
    });

    state.player.selectedCard.text = state.player.hand[selectedIndex].text;
    state.player.hand.splice(selectedIndex, 1);
  },
};
