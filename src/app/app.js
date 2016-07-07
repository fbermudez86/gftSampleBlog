//Third Party Dependencies
import angular from 'angular';
import 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

//Application Dependencies
import appConfig from './config/app.config';
import appRun from './config/app.run';
import appConstants from './config/app.constants';

import appLayout from './components/layout';
import home from './components/home';

const requires = [
  'ui.router',
  appLayout.name,
  home.name
];

const gft = angular
  .module('gft', requires)
  .constant('AppConstants', appConstants)
  .config(appConfig)
  .run(appRun);

angular.bootstrap(document, ['gft'], {
	strictDi: true
});

export default gft;
