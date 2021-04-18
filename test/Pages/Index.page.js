const { browser } = require("protractor");

var IndexPage = function(){
    
    this.welcomeText=$('body > h1');
    this.loginLink = element(by.css('[href="/signin"]'));  
    this.signupLink =  element(by.css('[href="/signup"]'));  

    this.loadpage = function(site){
browser.ignoreSynchronization = true;
browser.get(site);
    };

};

module.exports = new IndexPage();