import axios from 'axios';
import AnimalModel from '../models/AnimalModel';
import config from '../config';

const API = axios.create({
  baseUrl: config.apiUrl,
  headers: {
    'Accces-Control-Allow-Origin': '*',
  },
});

class animalApi {
  static getAll() {
    return API.get(`${config.apiUrl}/animals`)
      .then((response) => response.data.map((animal) => new AnimalModel(animal)));
  }

  static save(animal) {
    let request;

    // Update
    if (animal.id) {
      request = API.put(`${config.apiUrl}/animals/${animal.id}`, animal)
        .then((response) => new AnimalModel(response.data));
    } else {
      // Create
      request = API.post(`${config.apiUrl}/animals`, animal)
        .then((response) => new AnimalModel(response.data));
    }

    return request;
  }

  static remove(animalId) {
    return API.delete(`${config.apiUrl}/animals/${animalId}`);
  }
}

export default animalApi;

