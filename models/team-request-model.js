const mongoose = require("mongoose");

const teamRequestSchema = new mongoose.Schema ({
    email: String,
    squadsName: String,
    teamName: String,
    teamGame: String,
    fromEmail: String,
    fromName: String
});

const TeamRequest = new mongoose.model("TeamRequest", teamRequestSchema);

module.exports = TeamRequest;