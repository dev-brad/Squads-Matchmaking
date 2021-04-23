const mongoose = require('mongoose');
const Squads = require(__dirname + './../models/team-model');
const crud = require(__dirname + "./../crud.js");

// exports.createNewSquad = async function (req, res) {
//     let email = req.session.email;
//     let teamMates = req.body.player;

//     let user = await crud.findSquadsName(email);
//     teamMates.push(user);

//     const newSquad = new Squads({
//         teamLeaderEmail: req.session.email,
//         teamGame: req.body.gameType,
//         teamName: req.body.sname,
//         teamMates: teamMates
//     });

//     newSquad
//         .save()
//         .then(result => {
//             // console.log(result);
//             res.redirect('/profile')
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err });
//         });
// }
// };

exports.get_friends = async function (req, res) {

    if (req.isAuthenticated()){

        let email = req.session.email;
        let friends = await crud.findFriends(email);

        res.render("create-teams-form", {
            friends: friends
        });

    } else {
        res.redirect("/signin");
    }
};

exports.post_team_request = async function(req, res) {

    if (req.isAuthenticated()){

        let teamMates;
        if (Array.isArray(req.body.player)) {
            teamMates = req.body.player;
        } else {
            teamMates = [];
            teamMates.push(req.body.player);
        }
        
        let email = req.session.email;
        let squadsName = await crud.findSquadsName(email);

        if (teamMates.length > 0) {
            for (var i = 0; i < teamMates.length; i++) {
                
                let user = await crud.checkSquadsUsernameExists(teamMates[i]);

                if (user.email != email) {
                    await crud.createNewTeamRequestDocument(user.email, user.squadsName, req.body.sname, req.body.gameType, email, squadsName);
                }
            }
        }

        const newSquad = new Squads({
                teamLeaderEmail: email,
                teamGame: req.body.gameType,
                teamName: req.body.sname,
                teamMates: squadsName
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

    } else {
            res.redirect("/signin");
    }
};

