(function() {
	'use strict';

	angular
		.module('BlurAdmin.pages.bonusStoreManage.bonusStore')
		.controller('bonusStoreCtrl', ControllerCtrl)

	/** @ngInject */
	function ControllerCtrl($scope, $http, Session) {
		var vm = $scope.vm = {};
		vm.obj = {
			pageNumber: 1
		};
		Session.get().then(function(res) {
			vm.obj = res;
			vm.go();
		});
		vm.go = function(number) {
			if (number) {
				vm.obj.pageNumber = 1;
			}
			Session.set(vm.obj);
			$http.get('/admin/store/list', {
				params: vm.obj
			}).success(function(response) {
				vm.pages = response.page;
			});
		}

	}

}());