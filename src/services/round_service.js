import axios from 'axios';
import { BASE_URL } from '../constants.js';

export default class RoundService {
  roundStatus(gamePin, sessionToken) {
    const getUrl = `${BASE_URL}/rounds/status.json?pin=${gamePin}&token=${sessionToken}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: getUrl,
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

  getCurrent(gamePin, sessionToken) {
    const getUrl = `${BASE_URL}/rounds/current.json?token=${sessionToken}&pin=${gamePin}&`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: getUrl,
      }).then(
        ({
          data
        }) => {
          resolve(data);
        },
        (response) => {
          reject(response);
        },
      );
    });
  }

  requestRoundCandidates(gamePin, sessionToken) {
    const getUrl = `${BASE_URL}/rounds/card_list.json?pin=${gamePin}&token=${sessionToken}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: getUrl,
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

  submitCandidate(gamePin, sessionToken, cardId) {
    const postUrl = `${BASE_URL}/rounds/submit_card.json?card_id=${cardId}&pin=${gamePin}&token=${sessionToken}`;

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

  submitWinner(gamePin, sessionToken, cardId) {
    const postUrl = `${BASE_URL}/rounds/submit_winner.json?winner_id=${cardId}&pin=${gamePin}&token=${sessionToken}`;

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

  status(gamePin, sessionToken) {
    const getUrl = `${BASE_URL}/rounds/status.json?pin=${gamePin}&token=${sessionToken}`;

    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: getUrl,
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
}
