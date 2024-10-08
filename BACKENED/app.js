const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

const expressServer = app.listen(3001);
const io = socketio(expressServer);

const Game = require('./Game');
const QuotableAPI = require('./QuotableAPI');

io.connect('connect',(socket)=>{
  socket.on('create-game',async(nickName)=>{
    try{
      const quotableData = await QuotableAPI();
      let game = new Game();
      game.words = quotableData;
      let player = {
        socketID : socket.id,
        isPartyLeader : true,
        nickName
      }
      game.players.push(player);
      game = await game.save();

      const gameID = game._id.toString();
      socket.join(gameID);
      io.to(gameID).emit('updateGame',game);
    }catch(err){
      console.log(err);
    }
  })
})
