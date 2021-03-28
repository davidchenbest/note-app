import React, { useEffect, useReducer, useState } from "react";
import checkStorageDataType from '../modules/checkStorageDataType'
import AddContainer from "./AddContainer";
import Note from "./Note";
import NoNotes from './NoNotes'
import Order from './order/Order'
import { notesReducer } from "../reducers/notesReducer";
import ViewToggle from "./ViewToggle";
import Export from "./csv/Export";

export default function NoteContainer() {
  const [listView, setListView] = useState(false)
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      let data = localStorage.getItem("noteList");
      data = checkStorageDataType(data)
      if (data) dispatch({ type: "SET", notes: data });
      else dispatch({ type: "ADD", note: { title: 'Title', content: "Notes are stored on local storage" } });
    }
    else alert("Browser do not support web storage");
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      const data = JSON.stringify(notes);
      localStorage.setItem("noteList", data);
    };
  }, [notes]);

  const editNote = (index, note) => {
    dispatch({ type: "EDIT", id: index, note });
  };

  const remove = (e, index) => {
    e.preventDefault();
    dispatch({ type: "REMOVE", id: index });
  };

  const add = (note) => {
    dispatch({ type: "ADD", note });
  };

  return (
    <>
      <AddContainer add={add}></AddContainer>


      {!notes.length ? <NoNotes /> :
        <>
          <Export notes={notes} />
          <div className='viewButtonCon'>
            <ViewToggle listViewState={{ listView, setListView }} />
            <Order notesState={{ notes, dispatch }} />
          </div>
          <div className={`noteCon ${listView ? 'listView' : 'gridView'}`}>
            {notes.map((n, i) => (
              <Note
                note={n}
                key={i}
                index={i}
                editNote={editNote}
                remove={remove}
              ></Note>
            ))}
          </div>
        </>
      }


    </>
  );
}
