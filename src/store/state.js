
export default {
  currentState: 'LobbyView',
  lobbySubviews: Array(),
  session: {
    token: '123',
    username: '',
  },
  game: {
    pin: 0,
    czarToken: '',
    status: 'waiting',
    sessions: []
  },
  player: {
    score: 2,
    hand: [
      { id: 1, text: 'A missing semicolon' },
      { id: 2, text: 'Legacy code' },
      { id: 3, text: 'Just a small change in production' },
      { id: 4, text: 'A missing semicolon' },
      { id: 5, text: 'Legacy code' },
      { id: 6, text: 'Just a small change in production' },
      { id: 7, text: 'Legacy code' },
      { id: 8, text: 'A missing semicolon' },
      { id: 9, text: 'Just a small change in production' },
      { id: 10, text: 'Legacy code' }
    ],
    selectedCard: {
      id: 14,
      text: 'Lorem ipsum dolor sit amet'
    }
  },
  roundState: {
    index: 4,
    status:'',
    blackCard: 'My co-worker filed a complaint after they found %blank% at my desk.',
    candidateCards: [
      { text: 'Another player played this', id: 1},
      { text: 'Legacy code', id: 2 },
      { text: 'These are some random cards', id: 3},
      { text: 'A missing semicolon', id: 4},
      { text: 'I\'m hungry,', id: 5 }
    ]
  },
  roundWinner: {
    name: 'Bruni',
    token: '123',
    whiteCard: 'A missing semicolon'
  }
};
