const expect = require("chai").expect;
const post = require("../post/post");

describe("Post Collection", function() {
  describe("Create a Post", function() {
    it("creates and returns the post", function() {
        const testPost = {
            title: "test post",
            content: "test content"
        };
        var createdPost = post.makePost(testPost);

        expect(createdPost).to.equal(testPost);
    });
  });
});
