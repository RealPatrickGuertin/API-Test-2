import '../styles/card.css'

function Card(props) {
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.url} />
                </div>
    <div class="flip-card-back">
      <h1>{props.name}</h1>
      <p>Ingredients: {props.ing}</p>
      <p>Instructions: {props.ins}</p>
    </div>
  </div>
</div>
    )
}

export default Card