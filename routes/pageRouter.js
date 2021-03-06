const models = require('../db/models');
//TODO add error handeling
module.exports = function(server) {
	server.get('/pages/:name', function(req, res, next) {
		models.Page.findOne({
			include: [{
				model: models.Category,
				include: [{
					model: models.Item
				}]
			}],
			where: {
				name: req.params.name
			}
		}).then(page => {
			res.send(page);
		}).catch(err => {
			res.send(400, {
				error: err.errors[0].type
			});
		});
		return next();
	});

	server.post('/pages', function(req, res, next) {
		models.Page.create({
			name: req.body.name
		}).then(page => {
			res.send(page);
		}).catch(err => {
			res.send(400, {
				error: err.errors[0].type
			});
		});
		return next();
	});

};
