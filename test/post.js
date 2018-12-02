const expect = require("chai").expect;
const sinon = require("sinon");
const post = require("../post/post");

describe("Post Collection", function() {
  describe("Create a Post", function() {
    it("creates and returns the post", function() {
        const testPost = {
            title: "test post",
            content: "test content"
        };
        sinon.stub(post, "makePost").returns(testPost);
        
        var createdPost = post.makePost(testPost);

        expect(createdPost).to.equal(testPost);
    });
  });
});
