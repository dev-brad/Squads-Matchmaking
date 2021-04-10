
var SignupPage = function(){

    
    this.RegisterHeader=$(' body > main > div > div > div > div:nth-child(1) > div:nth-child(1) ');
     
    this.firstNameHeader=$(' body > main > div > div > div > div > div:nth-child(2)> form > div > label:nth-child(1)');
    this.firstNameInputBox=$('body > main > div > div > div > div > div:nth-child(2)> form > div > div:nth-child(2) > input[type=text]'); 
    // this.lastNameHeader=$('body > div > form > label:nth-child(3) > b');
    this.lastNameHeader=$('body > main > div > div > div > div > div:nth-child(2)> form >div:nth-child(2) >label:nth-child(1)');
     this.lastNameInputBox=$('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(2) > div> input[type=text] ');
     this.emailHeader=$('body > main > div > div > div > div > div:nth-child(2)> form >div:nth-child(3) >label:nth-child(1)');
     this.emailInputBox = $('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(3) > div >input[type=text]');
     //this.birthdate=$('body > main > div > div > div > div > div:nth-child(2)> form >div:nth-child(4) >label:nth-child(1)');
     this.birthdateInputBox = $('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(4) > div >input[type=date]');
     this.squadsmatchmakingusername=$('body > main > div > div > div > div > div:nth-child(2)> form >div:nth-child(5) >label:nth-child(1)');
     this.squadsmatchmakingusernameInput = $('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(5) > div >input[type=text]');
    // this.passwordHeader=$('body > div > form > label:nth-child(15) > b');
     this.passwordInput = $('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(8) > div >input[type=password]');
     this.submitButton=$('body > main > div > div > div > div > div:nth-child(2)> form >  div:nth-child(9) > button');


};

module.exports = new SignupPage();