import React from 'react'
import ReactQuill from 'react-quill'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
]

function click(e) {
    e.stopPropagation()
}

export default function Editor({ contentState }) {
    const changeEvent = value => {
        contentState.setContent(value)
    }

    return (
        <div style={{ backgroundColor: 'white', color: 'black', width: '100%' }} className='richEditor' onClick={click}>
            <ReactQuill value={contentState.content}
                onChange={changeEvent}
                modules={modules}
                formats={formats}
            />
        </ div>
    )
}
