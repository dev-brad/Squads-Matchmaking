var LoginPage = function(){
    
    this.emailHeader=$('body > div > form > label:nth-child(1) > b');
    this.emailInputBox = $('#full_name');
    this.passwordHeader = $('body > div > form > label:nth-child(3) > b');
    this.passwordInputBox = $('#email_address');
    this.signupLink = $('#navbarSupportedContent > ul > li:nth-child(2) > a');
    this.loginButton = $('body > main > div > div > div > div > div.card-body > form > div.col-md-6.offset-md-4 > button');
    
    
};

module.exports = new LoginPage();