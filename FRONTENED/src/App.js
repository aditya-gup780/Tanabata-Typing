import "./App.css";
import React, {useEffect, useState} from 'react';
import { useNavigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextArea from "./pages/Textarea/Textarea";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginsignup from "./pages/loginsignup/loginsignup";
import LeaderBoard from "./components/Leaderboard";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import socket from './socketConfig';
import Arena from './components/Arena';
// import loop from './components/ScrollEffect'

function App() {
  const navigate = useNavigate();
  const [gameState,setGameState] = useState({_id : "", isOpen : false, players : [], words : []});
  
  useEffect(()=>{
    socket.on('updateGame',(game)=>{
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    }
  },[]);
  
  useEffect(()=>{
    if(gameState._id !== "")
      navigate(`/game/${gameState._id}`);
  }, [gameState._id]); 
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Tanabata-Typing" element={<Home></Home>} />
          <Route exact path="/textarea" element={<TextArea></TextArea>} />
          <Route exact path="/dashboard" element={<GameMenu></GameMenu>} />
          <Route exact path="/game/create" element={<CreateGame></CreateGame>} />
          <Route exact path="/game/join" element={<JoinGame></JoinGame>} />
          <Route exact path="/game/:gameID" render={props => <Arena {...props} gameState={gameState}>} />
          <Route
            exact
            path="/Loginsignup"
            element={<Loginsignup></Loginsignup>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
