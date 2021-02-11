export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      action.note.date = new Date
      return [...state, action.note];
    case "EDIT":
      let arr = [...state];
      arr[action.id].title = action.note.title;
      arr[action.id].content = action.note.content;
      return arr;
    case "REMOVE":
      return state.filter((item, index) => index !== action.id);
    case "SET":
      return action.notes;
    default:
      return state;
  }
};
