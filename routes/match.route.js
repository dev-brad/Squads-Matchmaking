const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');
const crud = require(__dirname + "./../crud.js");

router.get("/fortnite", async function(req, res) {

    if (req.isAuthenticated()){

        let pref = await crud.findPMatch(req.session.preferences);
        let fortniteMatches = await crud.findFMatch(pref);

        let userStats = req.session.gameStats;
        let userPreferences = req.session.preferences;

        let rankedMatches = await matchController.rank_matches(userStats, userPreferences, fortniteMatches, "Fortnite");

        res.render("match-report", {
            game: "Fortnite",
            matchList: rankedMatches
        });
        
    } else {
        res.redirect("/signin");
    }
    
});


router.get("/apex-legends", async function(req, res) {
    
    if (req.isAuthenticated()){

        let pref = await crud.findPMatch(req.session.preferences);
        let apexMatches = await crud.findAMatch(pref);

        let userStats = req.session.gameStats;
        let userPreferences = req.session.preferences;

        let rankedMatches = await matchController.rank_matches(userStats, userPreferences, apexMatches, "Apex Legends");

        res.render("match-report", {
            game: "Apex Legends",
            matchList: rankedMatches
        });
        
    } else {
        res.redirect("/signin");
    }
    
});

router.post("/", async function(req, res) {

    req.session.matchName = req.body.match;
    req.session.save();

    res.redirect("/profile/match");
    
});

module.exports = router;