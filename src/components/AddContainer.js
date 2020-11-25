import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { slideDownVariant, scaleVariant } from '../framer-motion/motion'
import { DarkContext } from '../contexts/DarkContext'


export default function AddContainer({ add }) {
    const { isDark, colors } = useContext(DarkContext)
    const { background, color } = isDark ? colors.dark : colors.light

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
    }

    const display = () => {
        if (!showAdd) return (
            <div id='heading' style={{ color }} >
                <h1 >Jot down a note...</h1>
                <i className="material-icons " id='addBtn' onClick={() => clickAdd()} >&#xe148;</i>

            </div>
        )
        return (
            <motion.form onSubmit={(e) => addToNotes(e, text)} style={{ background, color }}
                variants={slideDownVariant}
                initial='initial'
                animate='animate'
            >
                <textarea autoFocus={true} value={text} onChange={(e) => setText(e.target.value)} style={{ background, color }}></textarea>
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
