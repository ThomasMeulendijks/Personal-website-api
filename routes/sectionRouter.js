const models = require('../db/models');

module.exports = function(server) {
	server.post('/sections', function(req, res, next) {
		models.Section.create({
			name: req.body.name,
			PageId: req.body.PageId
		}).catch(err => {
			console.error('Error has occured', err.message);
			res.send(err.message);
		}).then(section => {
			res.send(section);
		});
		return next();
	});
};
