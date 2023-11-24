const express=require('express');
const passport=require('passport');
const app=express();
const cors = require('cors');
const path = require('path');
const User=require('./mongodb');
const bcrypt=require("bcryptjs");
const validator = require('validator');
const jwt = require("jsonwebtoken");
const crypto=require('crypto');
const Leaderboard = require('./leaderboard');
const FriendRequest=require('./freind-request');
const { error } = require('console');
const { OAuth2Client } = require('google-auth-library');
const YOUR_GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());


app.post("/signup", async (request, response) => {
  const { name, password, email } = request.body;

  // Validate if all required fields are present
  if (!name || !email || !password) {
    return response.status(400).json({ message: 'Name, email, and password are required' });
  }
  if (!validator.isEmail(email)) {
    return response.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user instance and collect the data
    const user = new User({ name, email, password: hashedPassword }); // Assign the hashed password here

    const leaderboardEntry = new Leaderboard({ username: name, scores: [], date: new Date(), });
    leaderboardEntry.save();
    // Save the user to the database
    const savedUser = await user.save();

    response.status(201).send({
      message: "User Created Successfully",
      user: savedUser,
    });
  } catch (error) {
    response.status(500).send({
      message: "Error creating user",
      error,
    });
  }
});
  
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
 
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User Not found" });
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatch) { 
        return res.status(401).json({ error: "Invalid Password" });
      }
  
      const secretKey = crypto.randomBytes(32).toString('hex');
      const JWT_SECRET = secretKey;

      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "15m",
      });
  
      res.status(200).json({ status: "ok", data: token });
    } catch (err) {
      res.status(500).json({ error: err.message || "Server Error" });
    }
  });
//Google Authentication
  app.post('/google-auth', async (req, res) => {
    const { token } = req.body;
  
    const client = new OAuth2Client(YOUR_GOOGLE_CLIENT_ID);
  
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: YOUR_GOOGLE_CLIENT_ID,
      });
  
      const payload = ticket.getPayload();
      const userId = payload['sub'];
      const userEmail = payload['email'];
  
      res.status(200).json({ success: true, user: userEmail });
    } catch (error) {
      console.error('Google verification error:', error);
      res.status(500).json({ success: false, error: 'Verification failed' });
    }
  });

//Leaderboard
app.post('/update-score', async (req, res) => {
  try {
    const { username, newScore } = req.body; // Assuming newScore is sent from the client

    // Find the user in the database
    const user = await Leaderboard.findOne({ username });

    if (user) {
      // Update the user's score
      user.scores.push({ score: newScore, date: new Date() }); // Push the new score with the current date

      // Save the updated user data to the database
      await user.save();

      res.status(200).json({ message: 'Score updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Daily LeaderBoard
app.get('/leaderboard/daily/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);

    // Fetch all users
    const users = await Leaderboard.find({});

    // Filter the scores for each user based on the date range
    const dailyLeaderboard = users.map(user => {
      const dailyScores = user.scores.filter(score => score.date >= startOfDay && score.date <= endOfDay);
      return { username: user.username, score: Math.max(...dailyScores.map(score => score.score), 0) };
    });

    // Sort the leaderboard by score in descending order
    dailyLeaderboard.sort((a, b) => b.score - a.score);

    res.json(dailyLeaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Weekly Leaderboard
app.get('/leaderboard/weekly/:date', async (req, res) => {
  try {
    const { date } = req.params; 
    const startOfWeek = new Date(date);
    startOfWeek.setUTCHours(0, 0, 0, 0);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Start of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)

    const users = await Leaderboard.find({});

    // Filter the scores for each user based on the week
    const weeklyLeaderboard = users.map(user => {
      const weeklyScores = user.scores.filter(score => score.date >= startOfWeek && score.date <= endOfWeek);
      return { username: user.username, score: Math.max(...weeklyScores.map(score => score.score), 0) };
    });

    // Sort the leaderboard by score in descending order
    weeklyLeaderboard.sort((a, b) => b.score - a.score);

    res.json(weeklyLeaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/leaderboard/all-time', async (req, res) => {
  try {
    const allTimeLeaderboard = await Leaderboard.aggregate([
      {
        $match: { leaderboardType: 'all-time' }
      },
      {
        $group: {
          _id: '$username',
          maxScore: { $max: '$score' }
        }
      },
      {
        $sort: { maxScore: -1 }
      },
      {
        $limit: 10 // Limit the results to the top 10 users with the highest scores
      }
    ]);

    res.json(allTimeLeaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });