import '../styles/card.css'

function Card(props) {
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.url} alt="x" />
                </div>
    <div className="flip-card-back">
      <h1>{props.name}</h1>
      <p>Ingredients: {props.ingredients}</p>
      <p>Instructions: {props.instructions}</p>
    </div>
  </div>
</div>
    )
}

export default Card