const restify = require('restify');
const config = require('./config/config');
const database = require('./db/models');
const corsMiddleware = require('restify-cors-middleware');

//
// Initialize server
//

const server = restify.createServer({
	name: config.name,
	version: config.version
});

//
// Middleware
//
const cors = corsMiddleware({
	preflightMaxAge: 5, //Optional
	origins: ['*'],
	allowHeaders: ['API-Token'],
	exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

//
// Start server, connect to db and require routes
//

server.listen(8090, () => {
	database.sequelize.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
			database.sequelize.sync().then(() => {
				console.log('db synced');
			});
			require('./routes')(server);
		})
		.catch(err => {
			console.error('Error while setting up server', err);
			process.exit(1);
		});
	console.log('%s listening at %s', server.name, server.url);
});
