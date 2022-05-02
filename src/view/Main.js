import React from "react";
import img_7 from "../img/img_7.png"
import {Link} from 'react-router-dom'

function Main() {
    return (
      <div class="container">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Aqui se supone que va el nombre del juego</a>
        </li>
        <li class="nav-item" style={{
              padding: "10px",                
            }}>
          <Link to="/lobby" style={{
              textDecoration: "none",                
            }}><a class="nav-link" style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              borderRadius: '10px'                  
            }}>INICIO SESION</a></Link>
        </li>
        <li class="nav-item" style={{
              padding: "10px",                
            }}>
          <Link to="/lobby" style={{
              textDecoration: "none",                
            }}><a class="nav-link" style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              borderRadius: '10px'                  
            }}>REGISTRO</a></Link>
        </li>
      </ul>
      <br /><br />
      <div class="row justify-content-evenly">
        <div class="col-4">
          <h2>Reglas:</h2>  <br /><br />
          <ul>
            <il>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</il><br /><br />
            <il>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</il><br /><br />
            <il>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</il><br /><br />
          </ul>
        </div>
        <div class="col-4">
          <img src={img_7} />
        </div>
      </div>
    </div>
    );
  }
  

export default Main;