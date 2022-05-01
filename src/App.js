import React from "react";
import Main from './view/Main'
import Lobby from './view/Lobby'
import Game from './view/Game'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    // <h1>Hello</h1>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route path="lobby" element={<Lobby/>}></Route>
          <Route path="game" element={<Game/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
