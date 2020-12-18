import React, {Component} from "react";
import './styles/App.css';
import Card from './components/card'
import Header from './components/header'
import cardData from './components/cardData'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
}

componentWillMount() {
    this.callAPI();
}

makeCardComponents() {
  //const arr = this.state.apiResponse
  let cardComponents = cardData.map(joke => 
    <Card 
      key={joke.id} 
      name={joke.name} 
      ingredients={joke.ing} 
      instructions={joke.ins} 
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
