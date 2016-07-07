import angular from 'angular';

let HomeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
HomeModule.config(HomeConfig);

import HomeCtrl from './home.controller';
HomeModule.controller('HomeCtrl', HomeCtrl);

import HomeComponent from './home.component';
HomeModule.component('home', HomeComponent);

export default HomeModule;
