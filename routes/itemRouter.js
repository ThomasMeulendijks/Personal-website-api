const models = require('../db/models');

module.exports = function(server) {
	server.post('/items', function(req, res, next) {
		models.Item.create({
			name: req.body.name,
			CategoryId: req.body.CategoryId,
			link: req.body.link,
			img: req.body.img,
		}).then(item => {
			res.send(item);
		});
		return next();
	});
};
