import React from "react";
import img6 from "../img/img_6.jpeg"
import {Link} from 'react-router-dom'
import avatar from "../img/avatar.png"

function Lobby() {
    return (
        <div style = {{
          display:"flex",
          }} >
          <div style = {{
                        width: "68%",
                        backgroundColor:"black"}}> 
            <img src={avatar} />        
          </div>
          <div  style = {{
                        width: "32%",
                        backgroundColor:"pink"}}>
            <Link to="/lobby" style = {{border: '5px solid #555', 
                      height: "12vh",
                      marginLeft: "2px",
                      marginRight: "20vw"}}>Abandonar</Link>
            <img 
            style = {{border: '5px solid #555', 
                      height: "12vh",
                      right: ""
                      }}
            src={avatar}/>            
          </div>
      </div> 
    );
  }
  

export default Lobby;