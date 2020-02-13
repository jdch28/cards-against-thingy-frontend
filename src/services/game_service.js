import axios from 'axios';
import { BASE_URL } from '../constants.js';


export default class GameService {
  createSession(name) {
    const postUrl = `${BASE_URL}/sessions.json/?session[name]=${name}`;

    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: postUrl,
      }).then(
        ({ data }) => {
          resolve(data);
        },
        response => {
          reject(response);
        }
      );
    });
  }

  createGame(sessionToken) {
    const postUrl = `${BASE_URL}/games.json/?token=${sessionToken}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: postUrl,
      }).then(
        ({ data }) => {
          resolve(data);
        },
        (response) => {
          reject(response);
        },
      );
    });
  }

  gameStatus(gamePin) {
    const postUrl = `${BASE_URL}/games/${gamePin}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: postUrl,
      }).then(
        (data) => {
          resolve(data);
        },
        (response) => {
          reject(response);
        },
      );
    });
  }

  joinGame(gamePin, sessionToken) {
    const postUrl = `${BASE_URL}/games/${gamePin}/join?token=${sessionToken}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: postUrl,
      }).then(
        (data) => {
          resolve(data);
        },
        (response) => {
          reject(response);
        },
      );
    });
  }
}
