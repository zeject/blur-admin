(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStoreApply')
        .controller('bonusStoreApplyCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http) {
        var vm = $scope.vm = {};
        vm.obj = {};

        vm.obj.pageNumber = 1;

        vm.go = function(number) {
            if (number) {
                vm.obj.pageNumber = 1;
            }
            $http.get('/admin/store/applylist', {
                params: vm.obj
            }).success(function(response) {
                vm.pages = response.page;
            });
        }
        vm.go();

    }

}());