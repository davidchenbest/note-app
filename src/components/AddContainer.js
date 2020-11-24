import React, { useState } from 'react'
import { motion } from 'framer-motion'

const slideDownVariant = {
    initial: {
        y: '-100vh',
    },
    animate: {
        y: 0,
        transition: {
            duration: .3,
            delayChildren: .1,
            when: 'beforeChildren',

        }
    }
}

const scaleVariant = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            duration: .2,
            delayChildren: .1,
            when: 'beforeChildren',

        }
    }
}


export default function AddContainer({ add }) {
    const [text, setText] = useState('')
    const [showAdd, setShowAdd] = useState(false)
    const [error, setError] = useState(false)

    const addToNotes = (e, content) => {
        e.preventDefault()
        console.log(content.trim() !== '');
        if (content && content.trim() !== '') {
            add(text)
            setText('')
            setError(false)
            return
        }
        setError(true)

    }

    const clickAdd = () => {
        setShowAdd(!showAdd)
        console.log(showAdd);
    }

    const display = () => {
        if (!showAdd) return (
            <div id='heading'>
                <h1 >Jot down a note...</h1>
                <i className="material-icons " id='addBtn' onClick={() => clickAdd()}>&#xe148;</i>

            </div>
        )
        return (
            <motion.form onSubmit={(e) => addToNotes(e, text)}
                variants={slideDownVariant}
                initial='initial'
                animate='animate'
            >
                <textarea autoFocus={true} value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                <div className="btnCon">
                    <span
                        id="exit"
                        onClick={() => {
                            setShowAdd(!showAdd)
                        }}
                    >
                        X
            </span>
                    {error && <motion.span
                        id='error'
                        variants={scaleVariant}
                        initial='initial'
                        animate='animate'
                    >Required</motion.span>}
                    <input type='submit' value="Save" id='save' />
                </div>

            </motion.form>
        )
    }

    return (
        <div className='addCon'>
            {display()}
        </div>
    )
}
