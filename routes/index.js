
/*
 * GET home page.
 */

exports.index = function(req, res){
  var testData = new Firebase('https://scorching-fire-2712.firebaseio.com/');
  testData.on('value', function(dataSnapshot) {
	var message = dataSnapshot.val();
	console.log(message.test1);
  });
  res.render('index', { title: 'Peter Liu' });
};

