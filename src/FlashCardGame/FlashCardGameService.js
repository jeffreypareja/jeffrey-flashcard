import FlashCardRepository from "../FlashCardManagement/FlashCardRepository";

class FlashCardGameService{
    currentFlashCard ={}

    drawRandomFlashCard(){
        this.currentFlashCard = FlashCardRepository.pickRandomFlashCard()
        console.log(this.currentFlashCard)
        return this.currentFlashCard
    }

    checkAnswer(answer = ''){
        return this.currentFlashCard.element === answer
    }
}

export default new FlashCardGameService()