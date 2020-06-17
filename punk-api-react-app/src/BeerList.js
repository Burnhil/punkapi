import React from 'react';

function BeerList (props){

    console.log("This is from beerlist.js = ", props.beer);
    return(
        <div>
             <h3>The Beer List</h3>
             {/* <div><ul>{props.beer.map(item => <li key={item}>{item}</li>)}</ul></div> */}
               
        </div>
        
    );
}


export default BeerList;