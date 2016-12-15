describe("Hash", function() {

	var HashHistory = require("../src/hash").HashHistory,
	assert = require("assert");

	beforeEach(function(){

	});

	it("should work", function(done) {

		var hasHistory = new HashHistory(function(url){
			assert.equal(url,"/posts");
			done();
		});
		
		hasHistory.go("/posts");	
	});

});