class AppHeaderCtrl {
  constructor (AppConstants) {
    this.appName = AppConstants.appName;
  }
}

AppHeaderCtrl.$inject = ['AppConstants'];

export default AppHeaderCtrl;
