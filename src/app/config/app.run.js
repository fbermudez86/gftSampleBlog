const AppRun =  (AppConstants, $rootScope) => {
  //Cambiar el titulo de la pagina usando le state title...
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.setPageTitle(toState.title);
  });

  $rootScope.setPageTitle = (title) => {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += `${title} \u2014 `;
    }
    $rootScope.pageTitle += AppConstants.appName;
  };
};

AppRun.$inject = ['AppConstants', '$rootScope'];

export default AppRun;
