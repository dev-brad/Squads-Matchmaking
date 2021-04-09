
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

exports.createNewStatDocument = function (email, apexName, apexData, fortniteName, fortniteData) {

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

exports.findProfileData = async function(email, fn) {
    
    let squadsName = await findUserName(email);
    let gameStats = await findGameStats(email);
    let preferences = await findPreferences(email);

    // let preferences = preference.getPreferenceByEmail();

    fn(squadsName, gameStats, preferences);
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

exports.findPMatch = async function(sp) {
    let promise = new Promise((resolve, reject) => {

        const query = Preference.where({ $and: [
                                        { $or: [{ $and: [{ duos: sp.duos }, {duos: "Y"}] }, { $and: [{ trios: sp.trios }, {trios: "Y"}] }, { $and: [{ squads: sp.squads }, {squads: "Y"}] }] }, 
                                        { $or: [{ $and: [{ casual: sp.casual }, {casual: "Y"}] }, { $and: [{ ranked: sp.ranked }, {ranked: "Y"}] }] }, 
                                        { $or: [{ $and: [{ competitions: sp.competitions }, {competitions: "Y"}] }, { $and: [{ exhibitions: sp.exhibitions }, {exhibitions: "Y"}] }] },
                                        { email: {$ne: sp.email}}
                                        ]});
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
        //remove this console  log
        console.log(sp);
        console.log(result);
        return result;
    } else {
        return {};
    }

}

exports.findFMatch = async function (pm) {

    matchEmails = [];
    pm.forEach(function(match) {
        matchEmails.push(match.email)
    });

    console.log(matchEmails);

    let promise = new Promise((resolve, reject) => {

        const query = GameStat.where({$and: [
                                    { email: {$in: matchEmails} },
                                    { fortniteName: {$ne: null} }
                                    ]});
        query.find(function (err, fortniteMatches) {
            if (!err) {
                resolve(fortniteMatches);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;

    console.log(result);

    gameMatches = [];
    result.forEach(function(stat) {
        pm.filter(function(pref) {
            if (pref.email === stat.email) {
                gameMatches.push({
                    email: pref.email,
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

    console.log(gameMatches);

    if (gameMatches) {
        return gameMatches;
    } else {
        return {};
    }

}

exports.findAMatch = async function (pm) {

    matchEmails = [];
    pm.forEach(function(match) {
        matchEmails.push(match.email)
    });

    console.log(matchEmails);

    let promise = new Promise((resolve, reject) => {

        const query = GameStat.where({$and: [
                                { email: {$in: matchEmails} },
                                { apexName: {$ne: null} }
                                ]});
        query.find(function (err, apexMatches) {
            if (!err) {
                resolve(apexMatches);
            } else {
                console.log(err);
            }
        });
    });

    let result = await promise;

    console.log(result);

    gameMatches = [];
    result.forEach(function(stat) {
        pm.filter(function(pref) {
            if (pref.email === stat.email) {
                gameMatches.push({
                    email: pref.email,
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

    console.log(gameMatches);

    if (gameMatches) {
        return gameMatches;
    } else {
        return {};
    }

}