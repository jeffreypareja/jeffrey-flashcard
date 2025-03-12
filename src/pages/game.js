import React, {useEffect} from 'react'
import useFlashCardsGameServiceHook from '../FlashCardGame/useFlashCardGameServiceHook'
import AnswerForm from '../FlashCardGame/AnswerForm'
import FlashCard from '../components/FlashCard'

const GamePage = () => {
    let {currentCard, checkAnswer}= useFlashCardsGameServiceHook()

    return <>
    <FlashCard symbol = {currentCard?.symbol} element = {currentCard?.element}/>
    <AnswerForm onSubmit={checkAnswer}/>   
    </>
}

export default GamePage