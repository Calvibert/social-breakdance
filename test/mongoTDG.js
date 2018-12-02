const expect = require("chai").expect;
const sinon = require("sinon");
const tdg = require("../persistence/mongoTDG");

describe("MongoDB Table Data Gateway", function() {
  describe("Operate on the data", function() {
    it("creates an entry in the right collection", function() {
        var object = {
            title: "test object",
            content: "test object content"
        };
        var result = tdg.operate("test", "create", object);
        // object["_id"] = result["_id"];
        // delete result["_id"];

        result.then(function() {
            object["_id"] = result["_id"];
            expect(result).to.equal(object);

        })

        // console.log(result);
        // console.log(object);

        // expect(result).to.equal(object);
    });
  });
});
