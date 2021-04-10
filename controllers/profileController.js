const crud = require(__dirname + "./../crud.js");

exports.get_user_profile = function(req, res) {
    
    if (req.isAuthenticated()){
        let email = req.session.email;
        crud.findProfileData(email, (squadsName, gameStats, preferences)=> {

            req.session.gameStats = gameStats;
            req.session.preferences = preferences;
            req.session.save();

            // let friendRequests = [{
            //     email: email,
            //     squadsName: squadsName,
            //     fromEmail: "logan@xmen.com",
            //     fromName: "wolverine"
            //     }, {
            //     email: email,
            //     squadsName: squadsName,
            //     fromEmail: "storm@xmen.com",
            //     fromName: "storm"
            // }];

            let friendRequests;
            let friends;
            
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