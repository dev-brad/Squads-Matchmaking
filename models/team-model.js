const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamLeaderEmail: String,
    teamGame: String,
    teamName: String,
    teamMates: [String]  
});

const Teams = new mongoose.model("Teams", teamSchema);

module.exports = Teams;