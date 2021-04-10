const mongoose = require("mongoose");

const friendRequestSchema = new mongoose.Schema ({
    email: String,
    squadsName: String,
    fromEmail: String,
    fromName: String
});

const FriendRequest = new mongoose.model("FriendRequest", friendRequestSchema);

module.exports = FriendRequest;