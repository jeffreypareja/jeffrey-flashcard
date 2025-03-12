import React, {useState, useCallback} from 'react'

const AnswerForm = ({onSubmit = () => {}}) => {
    let [answer, setAnswer] = useState("")

    let changeAnswer = useCallback((e) => {
        setAnswer(e.target.value)
    }, [])

    let submitAnswer = useCallback((e) => {
        onSubmit(answer)
        setAnswer("")
    }, [answer])

    return <form onSubmit = {(e) => {e.preventDefault()}}> <input type = 'text' value = {answer} onChange = {changeAnswer} /> <button type = "submit" onClick = {submitAnswer}>Submit</button> </form>
}

export default AnswerForm