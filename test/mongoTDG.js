const expect = require("chai").expect;
const sinon = require("sinon");
const tdg = require("../persistence/mongoTDG");

describe("MongoDB Table Data Gateway", function() {
  describe("Operate on the data", function() {
    it("creates an entry in the right collection", function() {
        var object = {
            object: "test object content"
        };
        tdg.operate("test", "create", object, (result) => {
            expect(result.object).to.equal(object.object);
        });
    });
  });
});
