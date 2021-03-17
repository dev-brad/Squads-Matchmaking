const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require(__dirname + "app.js");

chai.use(chaiHttp);

console.log(app);

describe("squads", function() {
  // Describe what you are testing
  it("Should have home page", function(done) {
    // Describe what should happen
    // In this case we test that the home page loads
    chai
      .request(app)
      .get("/")
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); // Call done if the test completed successfully.
      });
  });
});