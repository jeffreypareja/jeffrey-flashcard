import React, {useState, useCallback} from 'react'
import FlashCard from '../shared/components/FlashCard'

const FlashCardForEditing = ({ symbol, element, onEdit = () => { }, onRemove = () => { } }) => {
    let [newElement, setNewElement] = useState(element)

    let changeElement = useCallback((e) => {
        setNewElement(e.target.value)
    }, [])

    let setNewElementName = useCallback(() => {
        onEdit(symbol, newElement)
    }, [newElement, onEdit])

    let removeElement = useCallback(() => {
        onRemove(symbol) 
    }, [symbol])

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center', 
        justifyContent: 'center',
        width: '250px'
    }}>
        <FlashCard symbol={symbol} />
        <div>
            <input type='text' value = {newElement} onChange = {changeElement}/>
            <button onClick={setNewElementName}>set name</button>
            <button onClick = {removeElement}>remove</button>
        </div>
    </div>
}

export default FlashCardForEditing
