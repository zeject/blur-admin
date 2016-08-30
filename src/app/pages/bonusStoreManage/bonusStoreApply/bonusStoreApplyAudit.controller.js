(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStore')
        .controller('bonusStoreApplyAuditCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, $state, $stateParams) {
        var vm = $scope.vm = {};

        var id = $stateParams.id;

        vm.obj = {
            img: []
        };

        vm.deleteImg = function(index) {
            vm.obj.img.splice(index, 1);
        };

        vm.submit = function(flag) {
            vm.obj.flag = flag;
            console.log(vm.obj);
            $http.post('/admin/store/initstore', vm.obj).success(function(response) {
                if (response.status) {
                    if (flag == 1) {
                        alert('初始化成功!');
                    } else {
                        alert('您已拒绝!');
                    }
                    $state.go('admin.apply');
                } else {
                    alert('初始化失败,该商户已加入!');
                }
            });
        }

        $http.get('/admin/store/fwdinit', {
            params: {
                id: id
            }
        }).success(function(response) {
            vm.obj = response.store;
            vm.obj.bonus = 500000;
            vm.obj.address = vm.obj.areas;
            vm.obj.applyid = vm.obj.id;
            vm.items = response.users;
            vm.obj.img = [];
        });

    }

}());