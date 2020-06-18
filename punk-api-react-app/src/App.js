import React, { Component } from 'react';
import './App.css';
import BeerPanel from './BeerPanel.js'

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      theBeers: [],
      likes: null
    };
  }

  //get the data

  fetchData(){
    //use fetch funtion and callback to transform the data to the JSON structure
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())      //transform the text data to json which comes back as a promise use then() to continue
    .then((theseBeers) => {                 // store json data in state
      this.setState({
        theBeers: theseBeers,
      },
    ()=> {
      //for checking purposes, use optional second argument ot pass a funtion to see if state changed
      console.log(`the beers retrieved are ${this.state.theBeers}`);

    });
  });
  }

  //use the react method componetdidmoutn() for retrieving data
  componentDidMount(){
    // call you fetchdata()
    this.fetchData();
  }

  likesButton = () =>{

    let updateLikes = this.state.likes + 1;
    this.setState({likes: updateLikes})
  }

  render(){ 
    // build all 25 beer panels
    let theBeerPanels = [];
    for(let i = 0; i < this.state.theBeers.length; i++){
    theBeerPanels.push(<div className="eachPanel"><BeerPanel beer={this.state.theBeers[i]} /><button onClick={()=>this.likesButton()}>Like {this.state.likes}</button></div>);
    }
    return (
    <div className="App">
      
      {theBeerPanels}
      

    </div>
  );}

}

export default App;
