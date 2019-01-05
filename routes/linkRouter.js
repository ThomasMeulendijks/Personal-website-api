const models = require('../db/models');

module.exports = function(server) {
	server.post('/links', function(req, res, next) {
		models.Link.create({
			name: req.body.name,
			SectionId: req.body.SectionId,
			url: req.body.url,
			img: req.body.img,
		}).then(link => {
			res.send(link);
		});
		return next();
	});
};
