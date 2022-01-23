import './SingleCard.css'
export default function SingleCard({card, handleChoice}) {
    const handleClick = () => {
        handleChoice(card)
    }
  return (
      <div className='card'>
        <div>
            <img className='front' src={card.src} alt="card front" />
            <img src="/img/cover.png" className='back' alt=" cardback" onClick={handleClick} />
        </div>
    </div>
  );
}
