import { useState, useCallback, useEffect } from 'react'
import FlashCardGameService from './FlashCardGameService'

const useFlashCardsGameServiceHook = () => {
    const [currentCard, setCurrentCard] = useState()

    useEffect(() => {
        setCurrentCard(FlashCardGameService.drawRandomFlashCard())
    }, [])

    const checkAnswer = useCallback((answer = '') => {
        let result = FlashCardGameService.checkAnswer(answer)
        if (result) {
            setCurrentCard(FlashCardGameService.drawRandomFlashCard())
        }
        else {
            alert('Wrong answer!')
        }
    }, [])

    return { currentCard, checkAnswer }
}

export default useFlashCardsGameServiceHook
