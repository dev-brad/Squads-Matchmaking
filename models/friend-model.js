const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema ({
    email: String,
    friendName: String
});

const Friend = new mongoose.model("Friend", friendSchema);

module.exports = Friend;