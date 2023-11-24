const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/user-data")
.then(()=>{
    console.log("Database (leaderboard) connected");
})
.catch(()=>{
    console.log("Connection Failed");
})

// Leaderboard Schema
const leaderboardSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    scores: [
      {
        score: {
          type: Number,
          default:0,
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    date: {
      type: Date,
      required: true
    },
  });
  
  // Create indexes for faster querying
  leaderboardSchema.index({ date: 1, leaderboardType: 1 });
  
  // Create a model using the schema
  const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
  
  module.exports = Leaderboard;



        /*console.log('sent successfully',response.data);
      const token =response.data.token;
      localStorage.setItem('token',token);
      localStorage.setItem('username',)
      navigat('/');
      */