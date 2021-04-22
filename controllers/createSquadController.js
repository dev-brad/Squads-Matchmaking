const mongoose = require('mongoose');
const Squads = require(__dirname + './../models/team-model');
const crud = require(__dirname + "./../crud.js");

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

exports.get_friends = async function (req, res) {

        let email = req.session.email;

    let friends = await crud.findFriends(email);

    console.log(friends);

            res.render("create-teams-form", {
                friends: friends
            });
        }



