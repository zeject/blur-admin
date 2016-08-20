(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.home')
        .controller('CenterCtrl', CenterCtrl)

    /** @ngInject */
    function CenterCtrl($scope, $http) {
        var vm = $scope.vm = {};
        vm.obj = {
            pageNumber: 1,
            title: '',
            times: '',
            isoff: false,
            is_xianchang: false,
            isfq: false,
            isout: false
        };
        vm.go = function(number) {
            if (number) {
                vm.obj.pageNumber = 1;
            }
            var url = '/admin/getmysell';
            $http.post(url, vm.obj).success(function(response) {
                vm.pages = response.p;
                vm.items = response.p.data;
            });
        }
        vm.go();

        vm.out = function(out, item) {
            if (!confirm('确定要' + (out ? '发货' : '取消发货') + '吗?')) {
                return;
            }
            var url = '/admin/product/out';
            $http.post(url, {
                id: item.id,
                isout: out
            }).success(function(response) {
                if (response.flag) {
                    item.isout = out;
                } else {
                    alert('未知错误,请重试或联系管理员');
                }
            });
        }
    }

}());