(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusInfo')
        .controller('bonusInfoCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http) {
        var vm = $scope.vm = {};

        vm.states = [1000, 3000, 5000, 10000, 30000, 50000, 100000];

        vm.items = [];

        vm.obj = {
            pageNumber: 1,
            type: 'store',
            date: null,
            format: 'yyyy-MM'
        };

        vm.go = function(number) {
            if (number) {
                vm.obj.pageNumber = 1;
            }
            var url = '/admin/bonus/list.json';
            $http.post(url, vm.obj).success(function(response) {
                vm.pages = response.ubls;
            });
        }
        vm.go();

        vm.setDateType = function(type) {
            vm.obj.dateType = type;
        }

        $http.get('/admin/bonus/count.json').success(function(response) {
            vm.kabo = response.kabo;
            vm.heya = response.heya;
        });

        $http.get('/admin/bonus/sum.json').success(function(response) {
            vm.bsum = response.bsum;
        });

        $http.get('/admin/bonus/store.json').success(function(response) {
            vm.store = response;
        });

        $http.get('/admin/store/jftj.json').success(function(response) {
            vm.bonusCount = response.map_jifen;
        });

        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };
    }

}());