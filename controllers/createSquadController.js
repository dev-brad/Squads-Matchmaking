const mongoose = require('mongoose');
const Squads = require(__dirname + './../models/team-model');

exports.createNewSquad = (req, res) => {

    const newSquad = new Squads({
        teamLeaderEmail: req.session.email,
        teamGame: req.body.gameType,
        teamName: req.body.sname, 
    });
    newSquad
        .save()
        .then(result => {
            // console.log(result);
            res.redirect('/profile')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

