import React, { useState } from 'react'
import useFlashCardsGameModeHook from '../FlashCardGameModes/useFlashCardGameModeHook'

import FlashCardsGameScreen from '../FlashCardGame/FlashCardGameScreen'
import FlashCardsManagementScreen from '../FlashCardManagement/FlashCardManagementScreen'

const FlashCards = () => {

    const { mode, manageCards, playCards } = useFlashCardsGameModeHook()

    return <>
        <div style = {{margin: "10px"}}>
            <button disabled={mode === 'manage'} onClick={manageCards} > managecards</button>
            <button disabled={mode === 'play'} onClick={playCards}> play cards</button>
        </div>

        {mode === 'manage' ? <FlashCardsManagementScreen /> : null}
        {mode === 'play' ? <FlashCardsGameScreen /> : null}
    </>
}

export default FlashCards