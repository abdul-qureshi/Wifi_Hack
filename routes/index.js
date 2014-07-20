
/*
 * GET home page.
 */

exports.index = function(req, res){
	var testData = new Firebase("https://scorching-fire-2712.firebaseio.com/");

	testData.on("value", function(data) {
		var message = data.val();
		res.render('index', { title: message.testes });
	});
};

