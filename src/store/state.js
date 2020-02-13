
export default {
  currentState: "LobbyView",
  session: {
    token: '',
    username: '',
  },
  game: {
    pin: 0,
    status: 'waiting',
    sessions: []
  },
  roundResults: {
    winnerPlayer: '',
    whiteCard: 'OMG!!',
    blackCard: 'KHE!?',
    isWinner: true,
  }
};
