(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.home')
        .controller('CenterCtrl', CenterCtrl)

    /** @ngInject */
    function CenterCtrl($scope, $http) {
        var vm = $scope.vm = {};
        vm.go = function(number) {
            if (number) {
                vm.obj.pageNumber = 1;
            }
            var url = '/admin/getmysell';
            $http.post(url, vm.obj).success(function(response) {
                console.log(response);
                vm.items = response.p.data;
            });
        }
        vm.go();
    }

}());