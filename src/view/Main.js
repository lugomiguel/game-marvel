import React from "react";
import img1 from "../img/img_1.jpeg"
import img2 from "../img/img_2.jpeg"
import img3 from "../img/img_3.jpeg"
import {Link} from 'react-router-dom'

function Main() {
    return (
      <div>
        <div>
          <h1>hola chicos aca toca hacer esta vista</h1>
          <Link to="/lobby">Siguiente vista</Link> 
        </div>
        <br/>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
      </div>   
    );
  }
  

export default Main;