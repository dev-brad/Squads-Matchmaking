
var SignupPage = function(){

    this.firstNameHeader=$('body > div > form > label:nth-child(1) > b');
    this.firstNameInputBox=element(by.name('fname'));
    this.lastNameInputBox=element(by.name('lname'));
    this.emailHeader=$('body > div > form > label:nth-child(5) > b');
    this.emailInputBox = element(by.name('email'));
     this.squadsmatchmakingusername=$('body > div > form > label:nth-child(9) > b');
     this.squadsmatchmakingusernameInput = element(by.name('squadsName'));
    this.birthdateInputBox = element(by.name('bdate'));
    this.apexLegendUsername = element(by.name('apexName'));
    this.fortniteUsername = element(by.name('fortniteName'));
    this.passwordInput = element(by.name('password'));
    this.registerButton = $('div.card-body button');

};

module.exports = new SignupPage();