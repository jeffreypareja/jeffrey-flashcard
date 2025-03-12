import React, {useState, useCallback} from 'react'

const AddCardForm = ({onSubmit = () => {}}) => {
    let [newElement, setNewElement] = useState("")
    let [newSymbol, setNewSymbol] = useState("")

    let changeElement = useCallback((e) => {
        setNewElement(e.target.value)
    }, [])

    let changeSymbol = useCallback((e) => {
        setNewSymbol(e.target.value)
    }, [])

    let submitNewElement = useCallback(() => {
        console.log("new elemnt")
        if(newSymbol.length > 0 && newElement.length > 0){
            onSubmit({
                symbol: newSymbol, 
                element: newElement
            })
            setNewElement("")
            setNewSymbol("")
        }
        else 
            alert("Provide details")


    }, [newSymbol, newElement, onSubmit])

    return <>
        <input type = 'text' placeholder='symbol' onChange={changeSymbol}/>
        <input type = 'text' placeholder='element' onChange = {changeElement}/>
        <button onClick={submitNewElement}>add</button>
    
    </>
}

export default AddCardForm

