var UserProfilePage = function(){

    this.squadsUserName = $('div.card-body > div > div:nth-child(2) > h4');
    this.fortniteUserName = $('div.card-body > div:nth-child(3) > div > h4');
    this.apexUserName = $('div.card-body > div:nth-child(5) > div > h4');
    this.duosPreference = $('div.card-body > div:nth-child(7) > div > p:nth-child(2)');
    this.findFortnite = element(by.buttontext('Find Fortnite Teammates'));
    this.findApex = element(by.buttontext('Find Apex Legends Teammates'));
};

module.exports = new UserProfilePage();