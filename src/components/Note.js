import React, { useState, useContext,useEffect } from "react";
import { DarkContext } from '../contexts/DarkContext'
import {getDate} from '../modules/getDate'


export default function Note({ note, editNote, index, remove }) {
    const { isDark, colors } = useContext(DarkContext)
    const { background, color } = isDark ? colors.dark : colors.light

    const [form, setForm] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    useEffect(() => {
        setTitle(note.title)
        setText(note.content)
    }, [note])


    const submit = (e) => {
        e.preventDefault();
        editNote(index, {title,content:text});
        setForm(false);
    };

    const hideForm = (e) => {
        e.stopPropagation();
        const tag = e.target.tagName;
        if (tag === "DIV" || tag === "SPAN") {
            setForm(false);
        }
    };

    return (
        <div className="eachNote" onClick={() => setForm(true)} style={{ background, color }}>
            <p className="title" >{note.title}</p>
            <p className="content" >{note.content}</p>
            <span className='date'>{getDate(note.date)}</span>
            {form && (
                <div
                    className="formCon"
                    onClick={(e) => {
                        hideForm(e);
                    }}
                >
                    <form onSubmit={(e) => submit(e)}  >
                        <input value={title} onChange={e=>setTitle(e.target.value)}  placeholder='title' type='text'/>
                        <textarea
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            autoFocus={true}
                        ></textarea>
                        <div className="btnCon">
                            <i
                                className="material-icons"
                                onClick={(e) => {
                                    remove(e, index);
                                    setForm(false);
                                }}
                            >
                                delete
              </i>

                            <input type="submit" value="Save" id='save' />
                        </div>
                        <span
                            id="exit"
                            onClick={(e) => {
                                hideForm(e);
                            }}
                        >
                            X
            </span>
                    </form>
                </div>
            )}
        </div>
    );
}
