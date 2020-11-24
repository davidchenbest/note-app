import React from 'react'
function changeEachColor(tag, bColor, color) {
    let elements = document.querySelectorAll(tag)
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = bColor
        elements[i].style.color = color
    }
}

export default function DarkMode() {
    const dark = (e) => {
        let heading = document.querySelector('#heading h1')
        let addBtn = document.querySelector('#addBtn')

        if (e.target.innerHTML !== 'Light') {
            e.target.innerHTML = 'Light'
            e.target.style.backgroundColor = 'white'
            e.target.style.color = 'black'
            document.body.style.backgroundColor = '#28282A'
            changeEachColor('.eachNote', '#424242', 'white')
            heading.style.color = 'white'
            addBtn.style.color = 'white'

        }
        else {
            e.target.innerHTML = 'Dark'
            e.target.style.backgroundColor = 'grey'
            e.target.style.color = 'white'
            document.body.style.backgroundColor = 'rgb(255, 211, 194)'
            changeEachColor('.eachNote', 'white', 'black')
            heading.style.color = 'black'
            addBtn.style.color = 'black'


        }
    }
    return (
        <span id='darkMode' onClick={(e) => dark(e)}>Dark</span>
    )
}
