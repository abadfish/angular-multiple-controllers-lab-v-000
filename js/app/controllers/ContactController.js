function ContactController() {
  var vm = this;
  vm.name = "Elliot",
  vm.email = "elliot@alderson.com"
  vm.phone = "5551117777"

  this.changeName = function () {
    vm.name = 'Mr. Robot!'
  };
};

angular
.module("app")
.controller("ContactController", ContactController);
