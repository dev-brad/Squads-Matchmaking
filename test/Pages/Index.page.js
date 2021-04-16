
var IndexPage = function(){
    
    this.welcomeText=$('body > h1');
    this.loginLink = $('body > center:nth-child(3) > div > button:nth-child(1) > a');
    this.signupLink = $('body > center:nth-child(3) > div > button:nth-child(2) > a');

};

module.exports = new IndexPage();