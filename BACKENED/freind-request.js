const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/user-data")
.then(()=>{
    console.log("Database (friend) connected"); 
})
.catch(()=>{
    console.log("Connection Failed");
})

const friendRequestSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the 'User' model
        required: true
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the 'User' model
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
    }
    // Other fields as needed
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

module.exports = FriendRequest;