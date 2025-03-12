import FlashCardRepository from "../FlashCardManagement/FlashCardRepository";

class FlashCardGameService{
    currentFlashCard = {}
    constructor(){}

    drawRandomFlashCard(){
        this.currentFlashCard = FlashCardRepository.pickRandomFlashCard()
        return this.currentFlashCard
    }

    checkAnswer(answer = ''){
        return this.currentFlashCard.element === answer
    }

}


export default FlashCardGameService()