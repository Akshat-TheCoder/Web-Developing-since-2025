import "./Card.css"

const Card = (proms) => {
    return (
        <div className='main'>
            <h1>{proms.title}</h1>
            <p>{proms.desc}</p>
        </div>
    )
}

export default Card
