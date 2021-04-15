const FriendRequest = require("./models/friend-request-model");
const Friend = require("./models/friend-model");

const User = require(__dirname + "/models/user-model.js");
const GameStat = require(__dirname + "/models/gamestat-model.js");
const Preference = require(__dirname + "/models/preferences-model.js");
// const preference = require(__dirname + "/controllers/playerPreferencesController.js");

exports.checkSquadsUsernameExists = async function (squadsName) {
    let promise = new Promise((resolve, reject) => {
        const query = User.where({squadsName: squadsName});
        query.findOne(function(err, user) {
            if (!err) {
                resolve(user);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    return result;
}

exports.createNewStatDocument = function (email, squadsName, apexName, apexData, fortniteName, fortniteData) {

    const emailKey = email;
    var scorePerMatch;
    var kd;
    var winRate;
    var level;
    var kills;
    var damage;

    if (fortniteData) {
        scorePerMatch = fortniteData.scorePerMatch;
        kd = fortniteData.kd;
        winRate = fortniteData.winRate;
    }

    if (apexData) {
        level = apexData.level;
        if (apexData.kills) {
            kills = apexData.kills;
        }
        if (apexData.damage) {
            damage = apexData.damage;
        }
    }

    const newStatDoc = new GameStat({
        email: emailKey,
        squadsName: squadsName,
        fortniteName: fortniteName,
        fortniteScorePerMatch: scorePerMatch,
        fortniteKD: kd,
        fortniteWinRate: winRate,
        apexName: apexName,
        apexLevel: level,
        apexKills: kills,   
        apexDamage: damage
    });

    newStatDoc.save(function (err, doc) {
        if (err) {
            console.log(err);
        }
    });
}

exports.findProfileData = async function(email, callback) {
    
    let squadsName = await findUserName(email);
    let gameStats = await findGameStats(email);
    let preferences = await findPreferences(email);

    // let preferences = preference.getPreferenceByEmail();

    callback(squadsName, gameStats, preferences);
}

async function findPreferences(email) {
    let promise = new Promise((resolve, reject) => {

        const query = Preference.where({email: email});
        query.findOne(function(err, preferences) {
            if (!err) {
                resolve(preferences);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    if (result) {
        return result;
    } else {
        return {};
    }
    
}

async function findGameStats(email) {
    let promise = new Promise((resolve, reject) => {

        const query = GameStat.where({email: email});
        query.findOne(function(err, gameStats) {
            if (!err) {
                resolve(gameStats);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    if (result) {
        return result;
    } else {
        return {};
    }
    
}

async function findUserName(email) {
    let promise = new Promise((resolve, reject) => {

        const query = User.where({email: email});
        query.findOne(function(err, user) {
            if (!err) {
                resolve(user);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    if (result) {
        return result.squadsName;
    } else {
        return {};
    }
    
}

<<<<<<< HEAD
exports.findPMatch = async function(sp) {
    let promise = new Promise((resolve, reject) => {

        const query = Preference.where({ $and: [
                                        { $or: [{ $and: [{ duos: sp.duos }, {duos: "Y"}] }, { $and: [{ trios: sp.trios }, {trios: "Y"}] }, { $and: [{ squads: sp.squads }, {squads: "Y"}] }] }, 
                                        { $or: [{ $and: [{ casual: sp.casual }, {casual: "Y"}] }, { $and: [{ ranked: sp.ranked }, {ranked: "Y"}] }] }, 
                                        { $or: [{ $and: [{ competitions: sp.competitions }, {competitions: "Y"}] }, { $and: [{ exhibitions: sp.exhibitions }, {exhibitions: "Y"}] }] },
                                        { email: {$ne: sp.email}}
                                        ]});
=======
async function findPMatch(duos, trios, squads, casual, ranked, competitions, exhibitions) {
    let promise = new Promise((resolve, reject) => {

        const query = Preference.where({ $or: [{ duos: "Y" }, { trios: "Y" }, { squads: "Y" }], $or: [{ casual: "Y" }, { ranked: "Y" }], $or: [{ competitions: "Y" }, { exhibitions: "Y"}] });
>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
        query.find(function (err, preferences) {
            if (!err) {
                resolve(preferences);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;

    if (result) {
<<<<<<< HEAD
        // console.log("PREFERENCE QUERY RESULTS");
        // console.log(result);
=======
        //remove this console  log
        console.log(result);
>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
        return result;
    } else {
        return {};
    }

}

<<<<<<< HEAD
exports.findFMatch = async function (pm) {

    matchEmails = [];
    pm.forEach(function(match) {
        matchEmails.push(match.email)
    });

    let promise = new Promise((resolve, reject) => {

        const query = GameStat.where({$and: [
                                    { email: {$in: matchEmails} },
                                    { fortniteName: {$ne: ""} }
                                    ]});
=======
async function findFMatch() {
    let promise = new Promise((resolve, reject) => {

        const query = //enter info here// .where({ fortniteName: { $nin: [null, ""] }});
>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
        query.find(function (err, fortniteMatches) {
            if (!err) {
                resolve(fortniteMatches);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;

<<<<<<< HEAD
    // console.log("FORTNITE QUERY RESULTS");
    // console.log(result);

    gameMatches = [];
    result.forEach(function(stat) {
        pm.filter(function(pref) {
            if (pref.email === stat.email) {
                gameMatches.push({
                    email: pref.email,
                    squadsName: stat.squadsName,
                    duos: pref.duos,
                    trios: pref.trios,
                    squads: pref.squads,
                    casual: pref.casual,
                    ranked: pref.ranked,
                    competitions: pref.competitions,
                    exhibitions: pref.exhibitions,
                    funScale: pref.funScale,
                    riskScale: pref.riskScale,
                    fortniteName: stat.fortniteName,
                    fortniteScorePerMatch: stat.fortniteScorePerMatch,
                    fortniteKD: stat.fortniteKD,
                    fortniteWinRate: stat.fortniteWinRate
                    })
            }
            return;
        });
    });

    // console.log("FINAL GAME MATCH RESULTS");
    // console.log(gameMatches);

    if (gameMatches) {
        return gameMatches;
=======
    if (result) {
        //remove this console  log
        console.log(results);
        return result;
>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
    } else {
        return {};
    }

}

<<<<<<< HEAD
exports.findAMatch = async function (pm) {

    matchEmails = [];
    pm.forEach(function(match) {
        matchEmails.push(match.email)
    });

    let promise = new Promise((resolve, reject) => {

        const query = GameStat.where({$and: [
                                { email: {$in: matchEmails} },
                                { apexName: {$ne: ""} }
                                ]});
        query.find(function (err, apexMatches) {
            if (!err) {
                resolve(apexMatches);
            } else {
                console.log(err);
            }
        });
=======
async function findAMatch() {
    let promise = new Promise((resolve, reject) => {

        const query = //enter info here// .where({ apexName: { $nin: [null, ""] }});
            query.find(function (err, apexMatches) {
                if (!err) {
                    resolve(apexMatches);
                } else {
                    console.log(err);
                }
            });
>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
    });

    let result = await promise;

<<<<<<< HEAD
    // console.log("APEX QUERY RESULTS");
    // console.log(result);

    gameMatches = [];
    result.forEach(function(stat) {
        pm.filter(function(pref) {
            if (pref.email === stat.email) {
                gameMatches.push({
                    email: pref.email,
                    squadsName: stat.squadsName,
                    duos: pref.duos,
                    trios: pref.trios,
                    squads: pref.squads,
                    casual: pref.casual,
                    ranked: pref.ranked,
                    competitions: pref.competitions,
                    exhibitions: pref.exhibitions,
                    funScale: pref.funScale,
                    riskScale: pref.riskScale,
                    apexName: stat.apexName,
                    apexLevel: stat.apexLevel,
                    apexKills: stat.apexKills,
                    apexDamage: stat.apexDamage
                    })
            }
            return;
        });
    });

    // console.log("FINAL GAME MATCH RESULTS");
    // console.log(gameMatches);

    if (gameMatches) {
        return gameMatches;
    } else {
        return {};
    }

}

exports.createNewFriendRequestDocument = function (email, squadsName, fromEmail, fromName) {

    const newFriendRequestDoc = new FriendRequest({
        email: email,
        squadsName: squadsName,
        fromEmail: fromEmail,
        fromName: fromName
    });

    newFriendRequestDoc.save(function (err, doc) {
        if (err) {
            console.log(err);
        }
    });
}

exports.findFriendRequests = async function(email) {
    let promise = new Promise((resolve, reject) => {

        const query = FriendRequest.where({email: email});
        query.find(function(err, requests) {
            if (!err) {
                resolve(requests);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    if (result) {
        return result;
    } else {
        return [];
    }
}

exports.approveFriendRequest = async function(email, fromName) {

    let promise = new Promise((resolve, reject) => {

        const newFriendDoc = new Friend({
            email: email,
            friendName: fromName
        });
    
        newFriendDoc.save(function (err, doc) {
            if (err) {
                console.log(err);
                reject();
            } else {
                resolve();
            }
        });
    });

    await promise;

    await deleteFriendRequest(email, fromName);

    return;
}

exports.rejectFriendRequest = async function(email, fromName) {

    await deleteFriendRequest(email, fromName);

    return;
}

async function deleteFriendRequest(email, fromName) {
    let promise = new Promise((resolve, reject) => {

        const query = FriendRequest.where({$and: [
                                    {email: email},
                                    {fromName: fromName}
                                    ]});
        query.deleteOne(function(err) {
            if (err) {
                console.log(err);
                reject();
            } else {
                resolve();
            }
        });
    });

    await promise;

    return;
}

exports.findFriends = async function(email) {
    let promise = new Promise((resolve, reject) => {

        const query = Friend.where({email: email});
        query.find(function(err, requests) {
            if (!err) {
                resolve(requests);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;
    
    if (result) {
        return result;
    } else {
        return [];
    }
}
=======
    if (result) {
        //remove this console  log
        console.log(results);
        return result;
    } else {
        return {};
    }

}

>>>>>>> 9f6402afa13ca98bd390e5849142d353b2425c9f
