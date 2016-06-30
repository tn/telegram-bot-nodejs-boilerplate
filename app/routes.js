const Tg = require('./bot').tg;
const StartController = require('./controllers/start_controller');
const MissingRouteController = require('./controllers/missing_route_controller');

Tg.router
  .when('/start', new StartController())
  .otherwise(new MissingRouteController())
