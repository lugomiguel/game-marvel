import React from "react";
import img6 from "../img/img_6.jpeg"
import {Link} from 'react-router-dom'

function Lobby() {
    return (
        <div>
          <div>
            <Link to="/lobby">Abandonar</Link>           
          </div>
          <div>
            
          </div>
        <div>
          <h1>La ultima vista es el juego</h1>
        </div>
        <br/>
        <img src={img6}/>
      </div> 
    );
  }
  

export default Lobby;