const mongoose = require('mongoose');
const PlayerPreferences = require(__dirname + './../models/preferences-model');

exports.createPlayerPreferences = (req, res) => {
        
    const playerPreferences = new PlayerPreferences({
        _id: new mongoose.Types.ObjectId(),
        numberOfPlayers: req.body.numberOfPlayers,
        rankingMode:req.body.rankingMode,
        playMode: req.body.playMode,
        competitionMode: req.body.competitionMode,
        riskMode: req.body.riskMode

    });
    
    playerPreferences
        .save()
        .then(result => {
            console.log(result);
            //res.redirect('/preferences')
            res.status(201).json({
                message: 'Player preferences successfully added',
                createdPreferences:{
                    numberOfPlayers: result.numberOfPlayers,
                    rankingMode:result.rankingMode,
                    playMode: result.playMode,
                    competitionMode: result.competitionMode,
                    riskMode: result.riskMode,
                    _id: result._id,

                    request:{
                        type:'POST',
                        url:'http://localhost:3000/preferences' + result._id
                    }
                }
               
            });
        })
        .catch(err => {
            console.log(err);
        res.status(500).json({error: err});
    });
}


exports.getPlayersPreferences = (res, req) => {
    
    PlayerPreferences.find()
    .select(' numberOfPlayers rankingMode playMode competitionMode riskMode_id')
    .exec()
    .then( docs => {
        const response = {
            count: docs.length,
            playerPreferences: docs.map(doc => {
                return{
                    numberOfPlayers: doc.numberOfPlayers,
                    rankingMode: doc.rankingMode,
                    playMode: doc.playMode,
                    competitionMode: doc.competitionMode,
                    riskMode: doc.riskMode,
                    _id: doc._id,
                    request:{
                        type:'GET',
                        url:'http://localhost:3000/get_preferences' + doc._id
                    }

                }
            })
        }
        console.log(docs);
            // res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
    // res.status(500).json({error: err}
    //     );
    });
}

