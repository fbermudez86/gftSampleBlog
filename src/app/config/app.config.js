const AppConfig = ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
  //$locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app></app>'
    });

    $urlRouterProvider.otherwise('/');
};

AppConfig.$inject = ['$httpProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default AppConfig;
