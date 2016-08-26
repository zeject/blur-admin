(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.releaseList')
        .controller('releaseListCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, $uibModal, ProductService) {
        var vm = $scope.vm = {};

        vm.obj = {
            pageNumber: 1
        };

        vm.del = function(item) {
            if (!confirm('确定要删除此商品吗?')) {
                return;
            }
            ProductService.productEdit('delete', null, {
                uuid: item.uuid
            }).then(function(response) {
                if (response.flag) {
                    vm.go(vm.obj.pageNumber);
                } else {
                    alert('删除失败,请重试或联系管理员!');
                }
            });

        };

        /**
         * 置顶产品
         */
        vm.proTop = function(item) {
            ProductService.productTop({
                top: !item.top,
                uuid: item.uuid
            }).then(function(response) {
                item.top = !item.top;
                alert('产品已' + (item.top ? '置顶' : '取消置顶'));
            });
        }

        /**
         * 上下线产品
         */
        vm.proFlag = function(item) {
            ProductService.productFlag({
                flag: !item.flag,
                uuid: item.uuid
            }).then(function(response) {
                item.flag = !item.flag;
                alert('产品已' + (item.flag ? '上线' : '下线'));
            });
        }

        vm.go = function(number) {
            if (number) {
                vm.obj.pageNumber = 1;
            }
            ProductService.product('get', null, vm.obj).then(function(response) {
                vm.pages = response.page;
            });
        }
        vm.go();

        /*
         * 获得商家信息列表
         */
        $http.get('/admin/getbonus').success(function(res) {
            console.log(res);
            vm.bonusUser = res.bonus;
        });

        vm.params = {};
        vm.proItem = {};
        vm.proParmasItem = function(item, watch) {
            vm.proItem.item = item;
            vm.proItem.watch = watch;
            var titles = ['', '产品参数', '包装清单', '锚点导航'];
            vm.proItem.title = item.name + '——' + titles[watch];
            ProductService.productParams('get', null, {
                uuid: item.uuid,
                watch: watch
            }).then(function(response) {
                vm.proParams = response.productParams;
                $uibModal.open({
                    animation: true,
                    templateUrl: 'app/pages/productManage/releaseList/productModal.html',
                    controller: 'productModalCtrl',
                    size: 'md',
                    resolve: {
                        data: function() {
                            return $scope;
                        }
                    }
                });
            });
        };
        vm.proParamsAdd = function() {
            vm.proParams.push({
                typekey: vm.params.key,
                typevalue: vm.params.value
            });
            vm.params.key = '';
            vm.params.value = '';
        };

        vm.proParamsDel = function(index) {
            vm.proParams.splice(index, 1);
        };
        vm.proParamsSave = function() {
            ProductService.productParams('post', {
                typekey: _.map(vm.proParams, 'typekey').join(),
                typevalue: _.map(vm.proParams, 'typevalue').join(),
                uuid: vm.proItem.item.uuid,
                watch: vm.proItem.watch
            }).then(function(response) {
                if (response.flag) {
                    alert('修改成功!');
                } else {
                    alert('发生错误,请重试或联系管理员!');
                }
            });
        };

    }

}());