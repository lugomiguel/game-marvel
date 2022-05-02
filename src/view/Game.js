import React from "react";
import imgTabla from "../img/imgTabla.jpg"
import {Link} from 'react-router-dom'
import avatar from "../img/avatar.png"
import imgmarvel1 from "../img_marvel/1DF.jpg"
import imgmarvel2 from "../img_marvel/1F4.jpg"
import imgmarvel3 from "../img_marvel/1F5.jpg"
import imgmarvel4 from "../img_marvel/4C1.jpg"
import imgmarvel5 from "../img_marvel/5A6.jpg"
import imgmarvel6 from "../img_marvel/7BA.jpg"
import imgmarvel7 from "../img_marvel/7DB.jpg"
import Card from "../components/Card";

function Lobby() {
    return (
        <div style = {{
          display:"flex",
          }}>
          <div style = {{width: "68%",}}> 
            <img src={imgTabla} style = {{
                      height: "500px",
                      margin: "50px",
                      }}/> 
            <div>
            <img src={imgmarvel1} style = {{
                      height: "100px",
                      margin: "20px",
                      marginLeft: "70px"
                      }}/>
            <img src={imgmarvel2} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
            <img src={imgmarvel3} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
            <img src={imgmarvel4} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
            <img src={imgmarvel5} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
            <img src={imgmarvel6} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
            <img src={imgmarvel7} style = {{
                      height: "100px",
                      margin: "20px",
                      }}/>
          </div>       
          </div>
          <div  style = {{width: "32%",}}>
            <Link to="/lobby" style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: '10px',
              marginLeft:"45%",                
            }}>Abandonar</Link>
            <img 
            style = {{border: '5px solid #555', 
                      height: "12vh",
                      margin: "10px",
                      }}
            src={avatar}/>
            <Card/>            
          </div>
      </div> 
    );
  }
  

export default Lobby;