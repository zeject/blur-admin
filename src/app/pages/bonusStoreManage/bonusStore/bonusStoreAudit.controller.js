(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStore')
        .controller('bonusStoreAuditCtrl', ControllerCtrl)

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
            $http.post('/admin/store/' + id, vm.obj).success(function(response) {
                console.log(response);
                if (response.flag) {
                    alert('保存成功!');
                }
            });
        }

        $http.get('/admin/store/' + id).success(function(response) {
            vm.obj = response.storeInfo;
            vm.obj.img = vm.obj.img_detail ? vm.obj.img_detail.split(',') : [];
        });

    }

}());