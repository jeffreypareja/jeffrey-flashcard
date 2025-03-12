class FlashCardRepository{
    flashCards  =  [
        {symbol: 'AG', element: 'gold'},
        {symbol: 'AL', element: 'aluminum'},
        {symbol: 'AU', element: 'silver'},
        {symbol: 'BR', element: 'boron'},
        {symbol: 'FE', element: 'iron'},
    ]

    addFlashCard(newSymbol = '', newElement = ''){
        let symbolExist = this.flashCards.findIndex(({symbol}) => newSymbol === symbol) > -1
        if(!symbolExist){
            this.flashCards = [
                ...this.flashCards, {
                    symbol: newSymbol, 
                    element: newElement
                }
            ]
        }
    }

    removeFlashCard(symbolToBeRemoved = ''){
        this.flashCards = this.flashCards.filter(({symbol}) => symbol !== symbolToBeRemoved )
    }

    changeFlashCardName(symbolOfFlashCard = '', newName = ''){
        this.flashCards = this.flashCards.map(({symbol, element}) => {
            if(symbol === symbolOfFlashCard)
                return {
                    symbol, 
                    element: newName
                }

            return {
                symbol, 
                element
            }
        })
    }

    pickRandomFlashCard() {
        let randomIndex = Math.floor(0 + Math.random()*(this.flashCards.length - 0 + 1))

        return this.flashCards[randomIndex]
    }

    getAllFlashCards(){
        return this.flashCards
    }
}

export default new FlashCardRepository()