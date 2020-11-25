import React, { useEffect, useReducer } from "react";
import AddContainer from "./AddContainer";
import Note from "./Note";
import { notesReducer } from "../reducers/notesReducer";
export default function NoteContainer() {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      let data = localStorage.getItem("noteList");
      if (data) {
        data = data.split(";;");
        // setNotes(data)
        dispatch({ type: "SET", notes: data });
      } else {
        // setNotes(['Notes are stored on local storage'])
        dispatch({ type: "SET", notes: ["Notes are stored on local storage"] });
      }
    } else alert("Browser do not support web storage");
  }, []);
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem("noteList", notes.join(";;"));
    };
  }, [notes]);

  const editNote = (index, content) => {
    dispatch({ type: "EDIT", id: index, note: content });
  };

  const remove = (e, index) => {
    e.preventDefault();
    dispatch({ type: "REMOVE", id: index });
  };

  const add = (content) => {
    dispatch({ type: "ADD", note: content });
  };

  return (
    <>
      <AddContainer add={add}></AddContainer>

      <div className="noteCon">
        {notes.map((n, i) => (
          <Note
            content={n}
            key={i}
            index={i}
            editNote={editNote}
            remove={remove}
          ></Note>
        ))}
      </div>
    </>
  );
}
