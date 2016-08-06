const AuthConfig=($stateProvider)=>{
  $stateProvider
      .state('app.auth', {
         url:'/auth',
          template:'<h1 >auth view</h1>',
          title:'Auth'
      });
    };

AuthConfig.$inject =['$stateProvider'];

export default AuthConfig;
