import React from "react";
import img4 from "../img/img_4.jpeg"
import img5 from "../img/img_5.jpeg"
import {Link} from 'react-router-dom'

function Lobby() {
    return (
        <div>
        <div>
          <h1>La zona del lobby</h1>
          <Link to="/game">Siguiente vista</Link> 
        </div>
        <br/>
        <img src={img4}/>
        <img src={img5}/>
      </div> 
    );
  }
  

export default Lobby;