import React, { useState } from 'react'


export default function AddContainer({ add }) {
    const [text, setText] = useState('')

    const addToNotes = (e, content) => {
        e.preventDefault()
        console.log(content.trim() !== '');
        if (content && content.trim() !== '') {
            add(text)
            setText('')
            return
        }
        alert('require')

    }

    return (
        <div className='addCon'>
            <form onSubmit={(e) => addToNotes(e, text)}>
                <textarea autoFocus={true} value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                <div>
                    <input type='submit' value="Save" />
                </div>

            </form>
        </div>
    )
}
