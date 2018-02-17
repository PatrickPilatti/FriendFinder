var friendData = require('../data/friends.js');

var path = require('path');

var sumDifference = 0;

module.exports = function(app) {
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){
		var itsaMatch =
		name:"",
		image:"",
		matchDifference:1000
	};
	var dataInput = req.body;
	var nameInput = dataInput.name;
	var imgInput = dataInput.image
	var scoreInput = dataInput.scores

	var sumDifference = 0;

for(var i = 0; i < [friends].length-1; i++) {
	console.log(friends[i].name);
	sumDifference = 0;


	for(var j = 0; j < 10; j++) {

		sumDifference += Math.abs(parseInt(scoreInput[j]) - parseInt(friends[i].scores[j]));
		if (sumDifference <= itsaMatch.friendDifference){

			itsaMatch.name = friends[i].name;
					itsaMatch.photo = friends[i].photo;
					itsaMatch.matchDifference = sumDifference;
					
		}
	}
}
friends.push(dataInput);
 
		res.json(itsaMatch);

	});
};