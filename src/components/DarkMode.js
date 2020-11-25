import React, { useContext } from 'react'
import { DarkContext } from '../contexts/DarkContext'

export default function DarkMode() {


    const { isDark, setIsDark, colors } = useContext(DarkContext)
    const { background, color } = !isDark ? colors.dark : colors.light



    const setting = () => {
        if (isDark) {
            document.body.style.backgroundColor = 'rgb(255, 211, 194)'

        }
        else {
            document.body.style.backgroundColor = '#28282A'
        }
        setIsDark(!isDark)

    }

    return (
        <span id='darkMode' onClick={() => setting()} style={{ background, color }}>{isDark ? 'Light' : 'Dark'}</span>
    )
}
