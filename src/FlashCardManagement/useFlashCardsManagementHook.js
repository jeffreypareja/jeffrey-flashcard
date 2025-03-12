import {useState, useCallback} from 'react'
import FlashCardRepository from './FlashCardRepository'

const useFlashCardsManagementHook = () => {
    const [cards, setCards]=  useState(FlashCardRepository.getAllFlashCards())

    const addCard = useCallback((newCard) => {
        console.log("adding card")
        FlashCardRepository.addFlashCard(newCard.symbol, newCard.element)
        console.log(FlashCardRepository.getAllFlashCards())
        setCards(FlashCardRepository.getAllFlashCards())
    }, [])

    const removeCard = useCallback((symbol) => {
        FlashCardRepository.removeFlashCard(symbol)
        setCards(FlashCardRepository.getAllFlashCards())
    }, [])

    const editCard = useCallback((symbol, newName) => {
        FlashCardRepository.changeFlashCardName(symbol, newName)
        setCards(FlashCardRepository.getAllFlashCards())
    }, [])

    return {
        cards, 
        addCard,
        removeCard, 
        editCard,
    }
}


export default useFlashCardsManagementHook