import React from "react";

import './card.css';

import CardRow from '../card-row';


function Card () {

  return(
    <div className="card"> 

      <div className="card-header">
        <div className="price">13 400 P</div>
        <div className="brend">
          <img src="http://pics.avs.io/99/36/SU.png" alt="brend"></img>
        </div>
      </div>
      
      <div className="card-main">
        <CardRow />
        <CardRow />
        <CardRow />
      </div>
  
    </div>
  )
}

export default Card