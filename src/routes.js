routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'about',
    url: '/',
    component: 'about'
  });

  $stateProvider.state({
    name: 'skills',
    url: '/skills',
    component: 'skills'
  });

  $stateProvider.state({
    name: 'experience',
    url: '/experience',
    component: 'experience'
  });

  $urlRouterProvider.otherwise('/');

}