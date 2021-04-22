const crud = require(__dirname + "./../crud.js");

exports.get_user_profile = async function(req, res) {
    
    if (req.isAuthenticated()){
        let email = req.session.email;
        let squadsName = req.session.squadsName;

        if (req.body.accept) {
            await crud.approveFriendRequest(email, squadsName, req.body.accept);
        } else if (req.body.reject) {
            await crud.rejectFriendRequest(email, req.body.reject);
        }

        let friendRequests = await crud.findFriendRequests(email);
        let friends = await crud.findFriends(email);
        

        crud.findProfileData(email, (squadsName, gameStats, preferences) => {

            req.session.squadsName = squadsName;
            req.session.gameStats = gameStats;
            req.session.preferences = preferences;
            req.session.save();    
            let teams = crud.findTeams(squadsName);
            
            res.render("user-profile-stats", {
                mainUser: "Y",
                mainUserName: squadsName,
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
                friends: friends,
                teams: teams
            });
        });

    } else {
        res.redirect("/signin");
    }
};

exports.get_match_profile = async function(req, res) {
    
    if (req.isAuthenticated()){
       
        let matchName = req.session.matchName;
        let matchUser = await crud.checkSquadsUsernameExists(matchName);
        req.session.matchUser = matchUser;
        req.session.save();

        let friends = await crud.findFriends(matchUser.email);

        crud.findProfileData(matchUser.email, (squadsName, gameStats, preferences) => {  
            
            res.render("user-profile-stats", {
                mainUser: "N",
                mainUserName: req.session.squadsName,
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
                friends: friends});
        });

    } else {
        res.redirect("/signin");
    }
};

exports.post_friend_request = async function(req, res) {

    if (req.isAuthenticated()){

    let matchUser = req.session.matchUser;
    await crud.createNewFriendRequestDocument(matchUser.email, matchUser.squadsName, req.session.email, req.session.squadsName);
    
    res.redirect("/profile");

} else {
        res.redirect("/signin");
    }
};