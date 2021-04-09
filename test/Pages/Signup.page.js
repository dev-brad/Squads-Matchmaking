
var SignupPage = function(){

    
    this.RegisterHeader=$(' body > main > div > div > div > div > div:nth-child(1) ');
     
    this.firstNameHeader=$(' body > main > div > div > div > div > div:nth-child(2)> form > div > label:nth-child(1)');
     //this.firstNameInputBox=$('body > div > form > input[type=text]:nth-child(2) ');
     this.firstNameInputBox=$('body > main > div > div > div > div > div:nth-child(2)> form > div > div:nth-child(2) > input[type=text]'); 
     this.lastNameHeader=$('body > div > form > label:nth-child(3) > b');
     this.lastNameInputBox=$('body > div > form > input[type=text]:nth-child(4) ');
     this.emailHeader=$('body > div > form > label:nth-child(5) > b');
     this.emailInputBox = $('body > div > form > input[type=email]:nth-child(6)');
     this.birthdate=$('body > div > form > label:nth-child(7) > b');
     this.birthdateInputBox = $('body > div > form > input[type=date]:nth-child(8)');
     this.squadsmatchmakingusername=$('body > div > form > label:nth-child(9) > b');
     this.squadsmatchmakingusernameInput = $('body > div > form > input[type=text]:nth-child(10)');
     this.passwordHeader=$('body > div > form > label:nth-child(15) > b');
     this.passwordInput = $('body > div > form > input[type=password]:nth-child(16)');
     this.submitButton=$('body > div > form > button');


};

module.exports = new SignupPage();