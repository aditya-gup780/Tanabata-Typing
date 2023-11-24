const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/user-data")
.then(()=>{
    console.log("Database connected"); 
})
.catch(()=>{
    console.log("Connection Failed");
})

const LoginSignUp = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"],
        unique:[true,"Username already exists"],
    },
    email:{
        type:String,
        required:[true,"Please provide an e-mail"],
        unique: [true, "Email Exist"]
        
    },
    password:{
        type:String, 
        required:[true,"Please provide a password"],
        unique:false
    },
    // For freind request System
    sent_requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FriendRequest'
    }],
    received_requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FriendRequest'
    }]
});

const User=mongoose.model("credentials",LoginSignUp);
module.exports=User;

// // Data related to user
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     score:{
//         type:Number,
//         default:0,
//     },
//     // Other user details
//     sent_requests: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'FriendRequest'
//     }],
//     received_requests: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'FriendRequest'
//     }]
//     // Other fields as needed
// });

// const UserData = mongoose.model('UserData', userSchema);
// module.exports=UserData;

// const friendRequestSchema = new mongoose.Schema({
//     sender_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     receiver_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'accepted', 'declined'],
//         default: 'pending'
//     }
//     // Other fields as needed
// });

// const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

// module.exports = FriendRequest;


