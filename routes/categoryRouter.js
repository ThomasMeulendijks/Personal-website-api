const models = require('../db/models');

module.exports = function(server) {
	server.post('/categories', function(req, res, next) {
		models.Category.create({
			name: req.body.name,
			PageId: req.body.PageId
		}).then(category => {
			res.send(category);
		}).catch(err => {
			res.send(400, {
				error: err.errors[0].type
			});
		});
		return next();
	});
};
