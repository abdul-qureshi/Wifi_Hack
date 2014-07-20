
/*
 * GET home page.
 */

var testData = new Firebase("https://scorching-fire-2712.firebaseio.com/");
testData.set({ testes: "hi"});

// console.log(testData);
testData.on("value", function(data) {
	var message = data.val();
	console.log(message);
});

exports.index = function(req, res){
  res.render('index', { title: 'Peter Liu' });
};

