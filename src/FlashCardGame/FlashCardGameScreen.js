import React from 'react'
import useFlashCardsGameServiceHook from './useFlashCardGameServiceHook'
import AnswerForm from './AnswerForm'
import FlashCard from '../shared/components/FlashCard'

const FlashCardGameScreen = () => {
    let {currentCard, checkAnswer}= useFlashCardsGameServiceHook()

    return <>
    <FlashCard symbol = {currentCard?.symbol} element = {currentCard?.element}/>
    <AnswerForm onSubmit={checkAnswer}/>   
    </>
}

export default FlashCardGameScreen