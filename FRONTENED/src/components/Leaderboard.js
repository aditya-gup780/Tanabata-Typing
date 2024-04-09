import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/leaderboard/all-time')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) || typeof data === 'object') {
          setLeaderboard(data);
        } else {
          console.error('Data received is neither an array nor an object:', data);
        }
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }, []);
  function handleDaily(e){
    e.preventDefault();
    fetch('http://localhost:5000/leaderboard/daily/:date')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) || typeof data === 'object') {
                setLeaderboard(data);
            } else {
                console.error('Data received is neither an array nor an object:', data);
            }
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
  }

  function handleWeekly(e){
    e.preventDefault();
    fetch('http://localhost:5000/leaderboard/weekly/:date')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) || typeof data === 'object') {
                setLeaderboard(data);
            } else {
                console.error('Data received is neither an array nor an object:', data);
            }
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
  }
  function handleAll(e){
    e.preventDefault();
    fetch('http://localhost:5000/leaderboard/all-time')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data) || typeof data === 'object') {
          setLeaderboard(data);
        } else {
          console.error('Data received is neither an array nor an object:', data);
        }
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  }
  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <>
      <button onClick={handleDaily}>Daily</button>
      <button onClick={handleWeekly}>Weekly</button>
      <button onClick={handleAll}>All-time</button>
      </>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;