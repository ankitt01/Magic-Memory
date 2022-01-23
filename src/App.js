import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
    {"src" : "/img/helmet-1.png", matched: false },
    {"src" : "/img/potion-1.png", matched: false },
    {"src" : "/img/ring-1.png", matched: false },
    {"src" : "/img/scroll-1.png", matched: false },
    {"src" : "/img/shield-1.png", matched: false },
    {"src" : "/img/sword-1.png", matched: false },
]
function App() {

    const [cards,setCards] = useState([])
    const [turns,setTurns] = useState(0);
    const [choiceOne,setChoiceOne] = useState(null)
    const [choiceTwo,setChoiceTwo] = useState(null)

    //Shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages,...cardImages] //double the cards
            .sort(() => Math.random()-0.5)  //shuffling
            .map((card) => ({...card, id: Math.random()}))    //Giving each of them a random id

            setCards(shuffledCards);
            setTurns(0);
    }


    //Handling user's choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            if(choiceOne.src === choiceTwo.src){
                setCards((prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src) {
                            return {...card, matched: true}
                        }else {
                            return card
                        }
                    })
                }))
                resetTurn()
            }else {
                setTimeout(() => resetTurn(), 500)
            }
        }
    },[choiceOne,choiceTwo])

    console.log(cards)
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns+1)
    }
    
    return ( 
        <div className = "App">
            <h1> Magic Match </h1> 
            <button onClick={shuffleCards}> New Game </button> 

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard key={card.id} handleChoice={handleChoice} card={card} flipped={card === choiceOne || card === choiceTwo || card.matched}/> //3 possibilities when we want to flip the card
                ))}
            </div>
        </div>
    );
}

export default App;