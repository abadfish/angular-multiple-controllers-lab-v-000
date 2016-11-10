function StaffController() {
  this.name = "Angela",
  this.email = "angela@ecorp",
  this.phone = "9998881111"
}

angular
    .module('app')
    .controller('StaffController', StaffController);
