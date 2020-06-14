import React, { Component } from 'react';

class BeerList extends Component{

    constructor(props){

        super(props);

        this.state = {

        }

    }

render(){
    
    return(
        <div>

             <h3>The Beer List</h3>
                <ul>
                   {/* <li>{props.beer}</li> */}
                </ul>
        </div>
        
    );
}



}

export default BeerList;