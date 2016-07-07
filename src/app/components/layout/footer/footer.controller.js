class FooterCtrl {
  constructor (AppConstants) {
    this.appName = AppConstants.appName;
    this.date = new Date();
  }
}

FooterCtrl.$inject = ['AppConstants'];

export default FooterCtrl;
