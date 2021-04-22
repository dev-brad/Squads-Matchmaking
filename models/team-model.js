const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamLeaderEmail: String,
    teamGame: String,
    teamName: String,
    teamMates: [String]  
});

const Team = new mongoose.model("Team", teamSchema);

module.exports = Team;