var LoginPage = function(){
    
    //this.emailHeader=element(by. css("label[for='full_name']")); //$('body > >main > div > div>div> div>div:nth-child(2)>form >div> label:nth-child(1) > b');
    this.emailInputBox = element(by.css('form input[name="email"]')); //$('body > >main > div > div>div> div>div:nth-child(2)>form >div:nth-child(2)> input[type=email]');
   // this.passwordHeader = $('body > div > form > label:nth-child(3) > b');
    this.passwordInputBox = element(by.css('form input[name="password"]'));
  //  this.signupLink = $('body > form > div > span > a');
    this.loginButton = element(by.css('form button[type="submit"]'));
    
    this.loadpage = function(site){
        browser.ignoreSynchronization = true;
        browser.get(site);
            };
    
};

module.exports = new LoginPage(); 