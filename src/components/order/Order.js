import React, {useState,useEffect} from 'react'
import '../../css/order.css'

export default function Order({notesState}) {
    const [category, setCategory] = useState('date')
    const [order, setOrder] = useState('asc')

    useEffect(() => {
        notesState.dispatch({ type: "ORDER", category,order})
        
        
    }, [category,order])

    return (
        <div className='order'>
            <select onChange={e=>setCategory(e.target.value)} value={category}>
                <option value='date'>Date</option>
                <option value='title'>Title</option>
                <option value='content'>Content</option>
            </select>
            <select onChange={e=>setOrder(e.target.value)} value={order}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
        </div>
    )
}
