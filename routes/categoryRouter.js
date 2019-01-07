const models = require('../db/models');

module.exports = function(server) {
	server.post('/categories', function(req, res, next) {
		models.Category.create({
			name: req.body.name,
			PageId: req.body.PageId
		}).catch(err => {
			console.error('Error has occured', err.message);
			res.send(err.message);
		}).then(category => {
			res.send(category);
		});
		return next();
	});
};
