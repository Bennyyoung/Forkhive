// reducers.ts
import { ActionType, SET_DARK_MODE } from './actionTypes';

interface InitialState {
  darkMode: boolean;
}

const initialState: InitialState = {
  darkMode: false,
};

const rootReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
    console.log('action', action.payload)
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
