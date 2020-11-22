import React, { useEffect, useState } from 'react'
import AddContainer from './AddContainer'
import Note from './Note'
export default function NoteContainer() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        if (typeof (Storage) !== 'undefined') {
            let data = localStorage.getItem('noteList');
            if (data) {
                data = data.split(';;')
                setNotes(data)
            }
            else {
                localStorage.setItem('noteList', 'hey')
                setNotes(['Notes are stored on local storage'])
            }
        }
        else alert('Browser do not support web storage')

    }, [])

    useEffect(() => {
        window.onbeforeunload = () => {
            // notes.push('y')
            localStorage.setItem('noteList', notes.join(';;'))
        }
    }, [notes])

    const editNote = (index, content) => {
        console.log(index, content);
        let arr = [...notes]
        arr[index] = content
        setNotes(arr)
    }

    const remove = (e, index) => {
        e.preventDefault()
        let arr = [...notes]
        arr.splice(index, 1)
        setNotes(arr)
    }

    const add = (content) => {
        let arr = [...notes, content]
        setNotes(arr)
    }

    return (
        <>
            <AddContainer add={add}></AddContainer>
            <div className='noteCon'>


                {notes.map((n, i) =>
                    <Note content={n} key={i} index={i} editNote={editNote} remove={remove}></Note>
                )}
            </div>
        </>
    )
}
