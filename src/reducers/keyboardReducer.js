import { ADD_NOTE_TO_LIST } from "../actions/keyboardActions";

const newKeyboardObj = {
  keysPlayed: []
};

const initialState = {
  keyboards: {
    fakeKeyboardId: { ...newKeyboardObj }
  }
};

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_TO_LIST:
      const { noteName, keyboardId } = action;
      const oldKeyboard = state.keyboards[keyboardId] || { ...newKeyboardObj };
      const updatedKeyboard = {
        ...oldKeyboard,
        keysPlayed: [...oldKeyboard.keysPlayed, noteName]
      };
      return {
        ...state,
        keyboards: { ...state.keyboards, [keyboardId]: updatedKeyboard }
      };
    default:
      return state;
  }
};

export default keyboardReducer;
