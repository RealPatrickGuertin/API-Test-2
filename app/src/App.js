import React, {Component} from "react";
import './styles/App.css';
import Card from './components/card'
import Header from './components/header'
import cardData from './components/cardData'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
}

componentDidMount() {
  fetch("http://localhost:9000/testAPI")
  .then(res => res.json())
  .then(
    (result) => this.setState({ 
    apiResponse: result 
  }))
  .catch(err => err);
}

makeCardComponents() {
  //const arr = this.state.apiResponse
  console.log(this.state.apiResponse)
  let cardComponents = cardData.map(cocktail => 
    <Card
      key={cocktail.id} 
      name={cocktail.name} 
      ingredients={cocktail.ingredients} 
      instructions={cocktail.instructions} 
    />)
    return cardComponents
}
  
render() {
  let cardComponents = this.makeCardComponents()
    return (
      <div className="App">
        <p className="Apicall">{this.state.apiResponse}</p>
        <Header />

        {cardComponents}

      </div>
    );
  }
}

export default App;
