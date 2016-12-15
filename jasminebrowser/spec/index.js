describe("Hash", function() {

	var HashHistory = require("../src/hash").HashHistory;

	beforeEach(function(){

	});

	it("should work", function() {

		var hasHistory = new HashHistory(function(url){
			expect(url).toBe("/posts");
		});
		
		hasHistory.go("/posts");	
	});

});