import React from "react";
import imgmarvel from "../img_marvel/1DF.jpg"
import {Link} from 'react-router-dom'

function Card() {
    return (
     <div style = {{border: '2px solid #555', 
        margin: "30px",
     }}>
        <div style = {{display:"flex", margin:"15px",}}>
            <h2 style = {{marginLeft:"10px",
                        marginRight:"175px"}}
                        >Titulo</h2>
            <p style = {{fontSize:"20px"}}
                        >T8</p>
        </div>
        <img src={imgmarvel} style = {{width:"300px", 
                                        margin:"25px",}}/>
        <p style = {{fontSize:"15px", margin:"10px"}}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="#" style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: '10px', 
              display:"inline-block",
              marginLeft:"100px",
              margin:"10px",              
            }}>Jugar</Link>
        <Link to="#"  style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: '10px',
              margin:"10px",                
            }}>Pasar</Link>
     </div>
    );
  }
    
  
  export default Card;