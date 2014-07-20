
/*
 * GET home page.
 */

exports.index = function(req, res){
	var Firebase = require('firebase');
	var testData = new Firebase("https://scorching-fire-2712.firebaseio.com/");

	// console.log(testData);
	testData.on("value", function(data) {
		var message = data.val();
		res.render('index', { title: message.testes });
	});
};

