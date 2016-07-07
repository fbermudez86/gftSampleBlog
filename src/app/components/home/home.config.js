const HomeConfig = ($stateProvider) => {
    $stateProvider
      .state('app.home', {
        url: '/',
        controller: 'HomeCtrl',
        controllerAs: '$ctrl',
        template: '<home></home>',
        title: 'Home'
      });
};

HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;
