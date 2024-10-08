import React from 'react';
import {Redirect} from 'react-router-dom';
import CountDown from './CountDown';
import StartBtn from './StartBtn';
import socket from '../socketConfig';
import DisplayWords from './DisplayWords';
import Form from './Form';
import progressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';
import DisplayGameCode from './DisplayGameCode';

const findPlayer = players => {
  return players.find(player => player.socketID === socket.id);
}

const Arena = ({gameState}) => {
  const {_id,players,words,isOpen,isOver} = gameState;
  const player = findPlayer(players);
  if(_id === "")
    return <Redirect to="/" />
  return (
    <div className="text-center">
      <DisplayWords words={words} player={player}>
      <ProgressBar players={palyers} player={player} wordsLength={words.length}>
      <Form isOpen={isOpen} isOver={isOver} gameID={_id}>
      <CountDown />
      <StartBtn player={player} gameID={_id}/>
      <DisplayGameCode gameID={gameID}>
      <ScoreBoard players={players}>
    </div>
  )
}

export default Arena;
