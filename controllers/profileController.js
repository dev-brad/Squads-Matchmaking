const crud = require(__dirname + "./../crud.js");

exports.get_user_profile = async function(req, res) {
    
    if (req.isAuthenticated()){
        let email = req.session.email;

        if (req.body.accept) {
            await crud.approveFriendRequest(email, req.body.accept);
        } else if (req.body.reject) {
            await crud.rejectFriendRequest(email, req.body.reject);
        }

        // This function call will be in the other users' profile POST route 
        // await crud.createNewFriendRequestDocument(email, "brad123", "rogue@xmen.com", "rogue");
        // await crud.createNewFriendRequestDocument(email, "brad123", "remy@xmen.com", "gambit");

        let friendRequests = await crud.findFriendRequests(email);
        let friends = await crud.findFriends(email);

        crud.findProfileData(email, (squadsName, gameStats, preferences) => {

            req.session.gameStats = gameStats;
            req.session.preferences = preferences;
            req.session.save();    
            
            res.render("user-profile-stats", {
                squadsName: squadsName,
                fortniteName: gameStats.fortniteName,
                scorePerMatch: gameStats.fortniteScorePerMatch,
                winRate: gameStats.fortniteWinRate, 
                killRatio: gameStats.fortniteKD, 
                apexName: gameStats.apexName,
                level: gameStats.apexLevel, 
                kills: gameStats.apexKills, 
                damage: gameStats.apexDamage, 
                duos: preferences.duos, 
                trios: preferences.trios, 
                squads: preferences.squads, 
                casual: preferences.casual, 
                ranked: preferences.ranked, 
                competitions: preferences.competitions, 
                exhibitions: preferences.exhibitions, 
                fcScale: preferences.funScale,  
                rcScale: preferences.riskScale,
                friendRequests: friendRequests,
                friends: friends});
        });

    } else {
        res.redirect("/signin");
    }
};

exports.get_match_profile = async function(req, res) {
    
    if (req.isAuthenticated()){
        let email = req.session.email;

        crud.findProfileData(email, (squadsName, gameStats, preferences) => {

            req.session.gameStats = gameStats;
            req.session.preferences = preferences;
            req.session.save();    
            
            res.render("user-profile-stats", {
                squadsName: squadsName,
                fortniteName: gameStats.fortniteName,
                scorePerMatch: gameStats.fortniteScorePerMatch,
                winRate: gameStats.fortniteWinRate, 
                killRatio: gameStats.fortniteKD, 
                apexName: gameStats.apexName,
                level: gameStats.apexLevel, 
                kills: gameStats.apexKills, 
                damage: gameStats.apexDamage, 
                duos: preferences.duos, 
                trios: preferences.trios, 
                squads: preferences.squads, 
                casual: preferences.casual, 
                ranked: preferences.ranked, 
                competitions: preferences.competitions, 
                exhibitions: preferences.exhibitions, 
                fcScale: preferences.funScale,  
                rcScale: preferences.riskScale,
                friendRequests: friendRequests,
                friends: friends});
        });

    } else {
        res.redirect("/signin");
    }
};