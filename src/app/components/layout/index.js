import angular from 'angular';
import template from './app.layout.html';

let layoutModule = angular.module('app.layout', []);

import AppHeader from './header/header.component';
import AppHeaderCtrl from './header/header.controller';
layoutModule.controller('HeaderCtrl', AppHeaderCtrl);
layoutModule.component('appHeader', AppHeader);

import AppFooter from './footer/footer.component';
import AppFooterCtrl from './footer/footer.controller';
layoutModule.controller('FooterCtrl', AppFooterCtrl);
layoutModule.component('appFooter', AppFooter);

layoutModule.component('app', { template });

export default layoutModule;
