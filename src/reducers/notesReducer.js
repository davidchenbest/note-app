export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.note];
    case "EDIT":
      let arr = [...state];
      arr[action.id] = action.note;
      return arr;
    case "REMOVE":
      return state.filter((item, index) => index !== action.id);
    case "SET":
      return action.notes;
    default:
      return state;
  }
};
