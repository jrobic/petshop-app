import * as types from './actionTypes';
import { beginRequestCall, requestCallError } from './requestStatusActions';
import animalApi from '../api/animalApi';

export function loadAnimalsSuccess(animals) {
  return { type: types.LOAD_ANIMALS_SUCCESS, animals };
}

export function updateAnimalSuccess(animal) {
  return { type: types.UPDATE_ANIMAL_SUCCESS, animal };
}

export function createAnimalSuccess(animal) {
  return { type: types.CREATE_ANIMAL_SUCCESS, animal };
}

export function removeAnimalSuccess(id) {
  return { type: types.REMOVE_ANIMAL_SUCCESS, id };
}

export function loadAnimals() {
  return (dispatch) => {
    dispatch(beginRequestCall());
    return animalApi.getAll().then((animals) => {
      dispatch(loadAnimalsSuccess(animals));
    }).catch((error) => {
      dispatch(requestCallError());
      throw error;
    });
  };
}

export function saveAnimal(animal) {
  return (dispatch) => {
    dispatch(beginRequestCall());
    return animalApi.save(animal).then((savedAnimal) => {
      if (animal.id) {
        dispatch(updateAnimalSuccess(savedAnimal));
      } else {
        dispatch(createAnimalSuccess(savedAnimal));
      }
    }).catch(error => {
      dispatch(requestCallError());
      throw error;
    });
  };
}

export function removeAnimal(animal) {
  return (dispatch) => {
    dispatch(beginRequestCall());
    return animalApi.remove(animal.id)
      .then(() => {
        dispatch(removeAnimalSuccess(animal.id));
      })
      .catch((error) => {
        dispatch(requestCallError());
        throw error;
      });
  };
}
