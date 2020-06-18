import React from 'react';


const MethodList = (props) => {
    //create variable to send back in JSX
    let fermentationSubpanel = null

    //check method for null and object
    if(props.method !== null && typeof props.method === 'object'){
        //create variable for each method property
        let fermentationJSX = [];
        let mash_tempJSX = [];
        let twistJSX = "";

        //check method fermenation for object
        if(typeof props.method.fermentation === 'object'){
           //create jsx for fermentation and store in fermentationJSX array
            let fermentationItem = <li>{
                   `The fermentation tempature is ${props.method.fermentation.temp.value} ${props.method.fermentation.temp.unit}` 

            }</li>;
            fermentationJSX = fermentationItem;
        }

        //check if mash_temp array is greater then 0
        if(props.method.mash_temp.length >=1 ){
            //create variable to store mashJSX in
            let mashtempItem = null;
            //for each property create mashJSX and store
            for(let mashtempObject of props.method.mash_temp){
      
                 mashtempItem = <li>{
                     `Temperature is ${mashtempObject.temp.value} ` +
                     `${mashtempObject.temp.unit} ` +
                     `for duration of ${mashtempObject.duration} minutes.`
                     }</li>
                mash_tempJSX.push(mashtempItem)
            }
        }

        //check if twist has value is so create twistJSX and store if not store no twist added in JSX
        if(typeof props.method.twist === 'string'){
            twistJSX = <li>{props.method.twist}</li>;
        }else{
            twistJSX = <li>no twist added</li>
        }
        
        //create headers and use JSX for fermenation, mash_temp, and twist to create final JSX to send back
        fermentationSubpanel = <div>
                <h2 className="headers">The Method</h2>
                <h3 className="headers">The Fermentation</h3>
                   <ul>{fermentationJSX}</ul>
                   <h3 className="headers">The Mash Temperature</h3>
                     <ul>{mash_tempJSX}</ul>
                    <h3 className="headers">Twist</h3>
                      <ul>{twistJSX}</ul>
            </div>
       
    }

    //return final JSX to be rendered
    return fermentationSubpanel;

}

const IngredientsList = (props) =>{
    //assume props.ingredients (will always be an object) will always have .hops, .malt and .yeast as fields
    //first build out the hops info, then the malt info and ast the yeast info
    
    let ingredientSubpanel = null;

    if(props.ingredients !== null && typeof props.ingredients === 'object'){
        
       let hopsJSX = [];
       let maltJSX = [];
       let yeastJSX = "";
       
       if(props.ingredients.hops.length >= 1) { // has one or more hops objects
          let hopItem = null;
          for(let hopItemObject of props.ingredients.hops){
          hopItem = <li>{
                `${hopItemObject.name} (${hopItemObject.attribute} hops) ` +
                `${hopItemObject.amount.value} ${hopItemObject.amount.unit} ` +
                `added at the ${hopItemObject.add}`
            }</li>
            hopsJSX.push(hopItem);
          }
       }

       if(props.ingredients.malt.length >= 1){
            let maltItem = null;
            for (let maltItemObject of props.ingredients.malt){
               maltItem = <li>{
                   `${maltItemObject.name}, ${maltItemObject.amount.value} ${maltItemObject.amount.unit}.`
               }</li>
               maltJSX.push(maltItem);
            }
       }

       yeastJSX = <li>{props.ingredients.yeast}.</li>

       //now to actually build the JSX for the ingredients listing
       ingredientSubpanel = <div className="ingredientsStyle" >
           <h2 className="headers">The Ingredients</h2>
           <h3 className="headers">The Hops</h3>
              <ul>{hopsJSX}</ul>
            <h3 className="headers">The Malt</h3>
              <ul>{maltJSX}</ul>
            <h3 className="headers">The Yeast</h3>
              <ul>{yeastJSX}</ul>
       </div>

       console.log("hops = " + hopsJSX + "malt = "+maltJSX + "yeastj = " + yeastJSX);
    }
    
    return ingredientSubpanel;
}

const BoilVolumeList = (props) =>{
    //assume that boil_volume is being passed in and its and object
    let boilVolumeJSX = null;
    if(props.boil_volume !== null  && typeof props.boil_volume === 'object') {
       boilVolumeJSX = <p className="panelParagraphs">The boil volume for this beer is {props.boil_volume.value} {props.boil_volume.unit}.</p>
    }
    return boilVolumeJSX;
}

const VolumeList = (props) =>{
    //set veriable to null for JSX to be returned
    let volumeJSX = null;
    //check if volume is null and object
    if(props.volume !== null && typeof props.volume === 'object') {
        //create volumeJSX 
    volumeJSX = <p className="panelParagraphs">The total volume this receipe produces is {props.volume.value} {props.volume.unit}</p>
    }
    return volumeJSX;
}

const FoodParingList = (props) => {
    //assume food_pairing is an array of values
    let foodParingConcatenation = "";
    let foodParingJSX = null;
    if(props.food_pairing !== null){

        if(props.food_pairing.length > 1){
            let lastFoodPairingItem = props.food_pairing.pop(); //pulls last element of the array.
            foodParingConcatenation = props.food_pairing.join(", ") + " or " + lastFoodPairingItem + ".";
        }else{
            foodParingConcatenation = props.food_pairing[0] + ".";
        }
        //foodParingConcatenation = props.food_pairing.join(", ");

    foodParingJSX = <p className="panelParagraphs">{`Here are some good food pairings with this beer: ${foodParingConcatenation}`}</p>
    }
    return foodParingJSX;
}

const BeerPanel = (props) =>{


    // assume that his funtional compponent will be passed a singel beer JSON object.
    // check to see if props.beer exists

    if(props.beer !== null) {
        //pull out the beer JSON objects top-level fields like name, abv, etc. and format then in JSX
        let topLevelListItems = [];

        //iterate over the props.beer JSON object and if the field being processes is Not an object
        //put it into an li in JSX.
        for (let [key, value] of Object.entries(props.beer)) {
            if (typeof value !== 'object'){
                //if the value is not an object assume its a string or other primitive
            topLevelListItems.push(<li>{key}: {value}</li>)
            }
        }

    return <div >
                <ul><h1 className="headers1">The Beer Info</h1>{topLevelListItems}</ul>
                <BoilVolumeList boil_volume={props.beer.boil_volume} />
                <FoodParingList food_pairing={props.beer.food_pairing} />
                <VolumeList volume={props.beer.volume}/>
                <IngredientsList ingredients={props.beer.ingredients}/>
                <MethodList method={props.beer.method} />
      
            </div>

    }
    

}

export default BeerPanel;