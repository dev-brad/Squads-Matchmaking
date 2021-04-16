const { browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");
const PreferencesPage = require("../Pages/Preferences.page");
const SignupPage = require("../Pages/Signup.page");
const UserProfilePage = require("../Pages/UserProfilePage.page");
const FortniteMatchPage = require("../Pages/FortniteMatchPage.page");
const ApexMatchPage = require("../Pages/ApexMatchPage.page");



describe('Signup Functionalities',()=>{

    var EC = protractor.ExpectedConditions;
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
        browser.get('https://squads-test.herokuapp.com/signup');

    });



     it('should   allow user to signup  with valid values', () => {
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
        PreferencesPage.playerNumbersDuos.click();
        PreferencesPage.modeCasual.click();
        PreferencesPage.exihibitions.click();
        PreferencesPage.submitButton.click();

        expect(browser.getTitle()).toEqual("Profile Page");
        expect(UserProfilePage.squadsUserName).toBe(userName);
        expect(UserProfilePage.fortniteUserName).toBe("Camormay");
        expect(UserProfilePage.apexUserName).toBe("Daltoosh");
        expect(UserProfilePage.duosPreference).toBe("Duos: Y");
        
        UserProfilePage.findFortnite.click();
        expect(FortniteMatchPage.fortniteHeader).toBe("Top 10 Fortnite Matches");
        browser.navigate().back();
        UserProfilePage.findApex.click();
        expect(ApexMatchPage.apexHeader).toBe("Top 10 Apex Legends Matches");
        browser.navigate().back();

     });


});
