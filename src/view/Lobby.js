import React from "react";
import avatar from "../img/avatar.png"
import {Link} from 'react-router-dom'
import RoundedInput from "../components/RoundedInput";
import GameEntry from "../components/GameEntry";

function Lobby() {
  return (
    <div>
      <div style={{
        width: "100%",
      }}>
        <span>
          <img 
            style = {{border: '5px solid #555', 
                      height: "12vh",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "20vw"}}
            src={avatar}/>
        </span>
      </div>

      <div style={{
        marginTop: "10vh",
        marginLeft: "10vw",
        marginRight: "10vw"
      }}>
        <div>
          <span style={{
            marginRight: "40px"
          }}>
            <RoundedInput></RoundedInput>
          </span>
          <span>
            <button style={{
              height: "50px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}>+ Crear partida</button>
          </span>
        </div>

        <div style={{marginTop: "40px"}}>
          <GameEntry name={"Juego 1"} currentPlayers = {4} maxPlayers = {4} state = {"Jugando"} />
          <Link to="/game"  style={{
              backgroundColor: "#ED1D24",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: '10px'                  
            }}>Unirme</Link>
        
          <GameEntry name={"Juego 2"} currentPlayers = {2} maxPlayers = {6} state = {"Esperando Jugadores"} />
          <GameEntry name={"Juego 3"} currentPlayers = {2} maxPlayers = {2} state = {"Jugando"} />
        </div>
      </div>
    </div>
  );
}
  

export default Lobby;