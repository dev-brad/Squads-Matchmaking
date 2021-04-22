const express = require('express');
const router = express.Router();

const createSquadController = require('../controllers/createSquadController');

//router.get("/", (req, res) => {
  //  res.render("create-teams-form", { root: "./views" });
//});
router.get('/', createSquadController.get_friends);

router.post('/', createSquadController.post_team_request);

module.exports = router;