import React, {Component} from "react";
import './styles/App.css';
import Card from './components/card'
import Header from './components/header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      cocktail: null 
    };
}

async componentDidMount() {
  const url = "http://localhost:9000/testAPI"
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.cocktails) 
  this.setState({cocktail: data.cocktails, loading: false})
  console.log(this.state.cocktail[0])
}

makeCardComponents() {
  if(this.state.loading == false) {
    let arr = this.state.cocktail
    let cardComponents = arr.map(cocktail => 
      <Card
        name={cocktail.name} 
        ingredients={cocktail.ingredients} 
        instructions={cocktail.instructions} 
        url={cocktail.url}
      />)
    return cardComponents
  }
}
  
render() {
  let cardComponents = this.makeCardComponents()
    return (
      <div className="App">

        <Header />
        {this.state.loading ? (
          <div>loading...</div> 
        ) : (
          <div>
            <div style={{flex: "0 25%"}}>{cardComponents}</div>
          </div>
        )}

      </div>
    );
  }
}

export default App;
