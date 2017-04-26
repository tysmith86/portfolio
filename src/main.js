import angular from 'angular';
import components from './components';
// import services from './services';
import './scss/main.scss';
// import uiRouter from 'angular-ui-router';
// import defaultRoute from 'angular-ui-router-default';
// import http from './http';
// import routes from './routes';
// import auth from './auth';

const app = angular.module('portfolio', [
  components,
  // services,
  // uiRouter
  // defaultRoute
]);

// app.config(http);
// app.config(routes);
// app.run(auth);

const dev = process.env.API_URL || '/api';

app.value('apiUrl', dev);