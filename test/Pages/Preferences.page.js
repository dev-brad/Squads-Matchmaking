var PreferencesPage = function(){

    this.playerNumbersDuos=element(by.name('duos'));
    this.modeCasual=element(by.name('casual'));
    this.exihibitions=element(by.name('exhibitions'));
    this.submitButton = $('div.card-body button');

};

module.exports = new PreferencesPage();