export function HashHistory (onChange) {
	var self = this;

	this.go = function (url,replace) {
		if(replace){
			location.replace("#" + url);
		}
		else {
			location.hash = url;
		}
	};

	//	this.back = function () {
	//		history.back();
	//	};
	//
	//	this.forward = function () {
	//		history.forward();
	//	};

	window.onhashchange = function () {
		var shortUrl = location.hash === "" ? "/" : location.hash.substring(1);
		onChange(shortUrl);
	};
}
