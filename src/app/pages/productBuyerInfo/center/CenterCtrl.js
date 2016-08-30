(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productBuyerInfo')
        .controller('CenterCtrl', CenterCtrl)

    /** @ngInject */
    function CenterCtrl($scope, $http, Session) {
        var vm = $scope.vm = {};
        vm.obj = {
            pageNumber: 1,
            format: 'yyyy-MM-dd',
            buyer_tel: '',
            title: '',
            cdate: '',
            times: '',
            isoff: true,
            is_xianchang: false,
            isfq: false,
            isout: false
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
            var url = '/admin/getmysell';
            $http.post(url, vm.obj).success(function(response) {
                vm.pages = response.p;
                vm.items = response.p.data;
            });
        }

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