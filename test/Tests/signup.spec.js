const { browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");
const IndexPage = require("../Pages/Index.page");
const SignupPage = require("../Pages/Signup.page");
//const PreferencesPage = require("../Pages/Preferences.page");


describe('signup',()=>{


    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://squads-test.herokuapp.com/signup');

    });

    it('should have correct page title', () => {
       expect(browser.getTitle()).toEqual("Registration");
    });

    it('should have firstname input box and should be required', () => {
        // expect(SignupPage.firstNameHeader.getText()).toEqual("First Name");
        expect(SignupPage.firstNameInputBox.getAttribute("required")).toEqual('true');
     });
    it('should have email input box and should be required', () => {
        // expect(SignupPage.emailHeader.getText()).toEqual("Email");
        expect(SignupPage.emailInputBox.getAttribute("required")).toEqual('true');
     });
     it('should have squadsmatchmakingusername input box and should be required', () => {
            //  expect(SignupPage.squadsmatchmakingusername.getText()).toEqual("Squads Matchmaking Username");
             expect(SignupPage.squadsmatchmakingusernameInput.getAttribute("required")).toEqual('true');
          });



});

xdescribe('Signup Functionalities',()=>{

    var EC = protractor.ExpectedConditions;
    beforeEach(()=>{
        browser.waitForAngularEnabled(false);
        browser.get('https://squads-test.herokuapp.com/signup');

    });



     xit('should   allow user to signup  with valid values', () => {
        SignupPage.firstNameInputBox.sendKeys("randomname");
        SignupPage.lastNameInputBox.sendKeys("lastname");
        SignupPage.emailInputBox.sendKeys("Test_user"+ Math.floor(Math.random() * 20)+"@gmail.com");
        SignupPage.birthdateInputBox.sendKeys("11/11/1999");
        var userName = "UserName"+Math.floor(Math.random() * 20);
        SignupPage.squadsmatchmakingusernameInput.sendKeys(userName);
        SignupPage.apexLegendUsername.sendKeys("Daltoosh");
        SignupPage.fortniteUsername.sendKeys("Camormay");
        SignupPage.passwordInput.sendKeys("sdfsdf2342");
        SignupPage.submitButton.click();
        expect(browser.getTitle()).toEqual("Preferences");
     });


});
