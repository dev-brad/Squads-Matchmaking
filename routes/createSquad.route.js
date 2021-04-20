const express = require('express');
const router = express.Router();

const createSquadController = require('../controllers/createSquadController');

router.get("/", (req, res) => {
    res.sendFile("create-teams-form.html", { root: "./views" });
});

//router.get("/", (req, res) => {
//    res.render("create-teams-form", { root: "./views" });
//});

router.post('/', createSquadController.createNewSquad);

module.exports = router;