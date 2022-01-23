import './SingleCard.css'
export default function SingleCard({card}) {
  return (
      <div className='card'>
        <div>
            {/* Front face */}
            <img className='front' src={card.src} alt="card front" />
            {/* Back Face */}
            <img src="/img/cover.png" className='back' alt=" cardback" />
        </div>
    </div>
  );
}
