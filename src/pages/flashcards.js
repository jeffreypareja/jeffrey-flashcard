import React from 'react'
import useFlashCardsManagementHook from '../FlashCardManagement/useFlashCardsManagementHook'
import FlashCard from '../FlashCardManagement/FlashCard'
import AddCardForm from '../FlashCardManagement/AddCardForm'

const FlashCards = () => {
    let { cards, editCard, removeCard, addCard } = useFlashCardsManagementHook()

    return (<>
        <AddCardForm onSubmit={addCard} />
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {cards.map(({ symbol, element }) => {
                return <FlashCard key={symbol} element={element} symbol={symbol} onEdit={editCard} onRemove={removeCard} />
            })}
        </div>
    </>)
}

export default FlashCards