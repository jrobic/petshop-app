import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function animalReducer(state = initialState.animals, action) {
  switch (action.type) {
    case types.LOAD_ANIMALS_SUCCESS:
      return action.animals;
    case types.CREATE_ANIMAL_SUCCESS:
      return [...state, Object.assign({}, action.animal)];
    case types.UPDATE_ANIMAL_SUCCESS:
      return [
        ...state.filter(animal => animal.id !== action.animal.id),
        Object.assign({}, action.animal),
      ];
    case types.REMOVE_ANIMAL_SUCCESS:
      console.log(state, action);
      return [...state.filter(animal => animal.id !== action.id)];
    default:
      return state;
  }
}

