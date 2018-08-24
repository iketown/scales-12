export const ADD_NOTE_TO_LIST = "ADD_NOTE_TO_LIST";
export const addNoteToList = ({ noteName, keyboardId }) => ({
  type: ADD_NOTE_TO_LIST,
  noteName,
  keyboardId
});
