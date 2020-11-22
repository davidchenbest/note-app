import React, { useState } from "react";

export default function Note({ content, editNote, index, remove }) {
    const [form, setForm] = useState(false);
    const [text, setText] = useState(content);

    const submit = (e) => {
        e.preventDefault();
        editNote(index, text);
        setForm(false);
        console.log(form);
    };

    const hideForm = (e) => {
        e.stopPropagation();
        const tag = e.target.tagName;
        if (tag === "DIV" || tag === "SPAN") {
            setForm(false);
        }
    };

    return (
        <div className="eachNote" onClick={() => setForm(true)}>
            <p className='content'>{content}</p>
            {form && (
                <div
                    className="formCon"
                    onClick={(e) => {
                        hideForm(e);
                    }}
                >
                    <form onSubmit={(e) => submit(e)}>
                        <textarea
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            autoFocus={true}
                        ></textarea>
                        <div className='btnCon'>
                            <button
                                onClick={(e) => {
                                    remove(e, index);
                                    setForm(false);
                                }}
                            >
                                Remove
                            </button>
                            <input type="submit" value="Save" />
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
