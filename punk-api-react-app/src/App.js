import React, { Component, useReducer } from 'react';
import './App.css';
import BeerList from './BeerList.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      beer: [],
      
    }
  }
  
  // fetchData = () => {

  //   fetch('https://api.punkapi.com/v2/beers')
  //   .then(res => res.json())
  //   .then(res => {
  //       res.map(user => {
  //           console.log(`${user.id}: ${user.name}`); 
  //           this.state.beer[user] =  `{${user.id}: ${user.name}}`;      
  //       });      
  //   });
  // };

  fetchData(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(res => res.map(item => (
        {
            id: `${item.id}`,
            name: `${item.name}`,
            description: `${item.description}`,
            image_url: `${item.image_url}`

        }
    )))
    .then(beer => this.setState({
        beer,
    }))
    .catch(error => console.log('parsing failed', error))
    
}

  render(){
    //this.fetchData();
    console.log(" this is beer[] = ",this.state.beer);
    // console.log(this.state.beer.length);

  return (
    <div className="App">
      <header className="App-header">

        <h1>Fetching Data <button className="btn btn-sm btn-danger" onClick={(e) => {
                        this.fetchData();    
                    }}>Fetch now</button></h1>
       </header>

       <BeerList item = {[this.state.beer]}/>
    </div>
  );
  }
}

export default App;
