const mongoose = require('mongoose');
const Squads = require(__dirname + './../models/team-model');
const crud = require(__dirname + "./../crud.js");

exports.createNewSquad = async function (req, res) {
    let email = req.session.email;
    let teamMates = req.body.player;
    let user = await crud.findSquadsName(email);
    teamMates.push(user);
    //for (var i = 0; i < 4; i++) {
    //    if (req.body.player + i) {
      //      teamMates.push(req.body.player + i);
        //}
    //}
    console.log(req.body.player);
    //console.log(teamMates);
    const newSquad = new Squads({
        teamLeaderEmail: req.session.email,
        teamGame: req.body.gameType,
        teamName: req.body.sname,
        teamMates: teamMates
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



