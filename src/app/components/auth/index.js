import angular from 'angular';
let AuthModule = angular.module('app.auth',[]);

import AuthConfig from './auth.config';
AuthModule.config(AuthConfig);

export default AuthModule;