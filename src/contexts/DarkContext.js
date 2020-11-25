import React, { useState, createContext } from 'react'

export const DarkContext = createContext()

const DarkProvider = (props) => {
    const [colors] = useState(
        {
            dark: { background: '#424242', color: 'white' },
            light: { background: 'white', color: 'black' },
        }
    )
    const [isDark, setIsDark] = useState(false)
    return (
        <DarkContext.Provider value={{ colors, isDark, setIsDark }}>
            {props.children}
        </DarkContext.Provider>
    )
}

export default DarkProvider