(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.release')
        .controller('releaseCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, $stateParams, Product) {
        var vm = $scope.vm = {};
        var id = $stateParams.id;
        if (!id) {
            id = -1;
        }
        vm.obj = {
            id: '',
            img: [],
            uuid: '',
            name: '',
            products: [{
                type: '',
                code: '',
                count: 0,
                vjiage: 0,
                jiage: 0
            }],
            protype: '',
            times: '',
            danwei: '',
            nocount: true,
            notimes: true,
            nobonus_phone: true,
            flag: true
        };

        $scope.$watch('vm.obj.nocount', function(value) {
            if (value) {
                vm.obj.limitcount = -1;
            } else {
                vm.obj.limitcount = (vm.obj.limitcount == -1) ? '' : vm.obj.limitcount;
            }
        });

        $scope.$watch('vm.obj.notimes', function(value) {
            if (value) {
                vm.obj.times = -1;
            } else {
                vm.obj.times = (vm.obj.times == -1) ? '' : vm.obj.times;
            }
        });

        $scope.$watch('vm.obj.nobonus_phone', function(value) {
            if (value) {
                vm.obj.bonus_phone = '';
            } else {
                vm.obj.bonus_phone = vm.bonus_phone && vm.bonus_phone.cellphone;
            }
        });

        $scope.$watch('vm.bonus_phone', function(value) {
            vm.obj.bonus_phone = value && value.cellphone;
        });

        vm.delPro = function(index) {
            vm.obj.products.splice(index, 1);
            if (vm.obj.products.length < 1) {
                vm.addPro();
            }
        };

        vm.addPro = function() {
            vm.obj.products.push({
                type: '',
                code: '',
                count: 0,
                vjiage: 0,
                jiage: 0
            });
        };

        vm.submit = function() {
            vm.obj.type = _.map(vm.obj.products, 'type').join();
            vm.obj.code = _.map(vm.obj.products, 'code').join();
            vm.obj.count = _.map(vm.obj.products, 'count').join();
            vm.obj.vjiage = _.map(vm.obj.products, 'vjiage').join();
            vm.obj.jiage = _.map(vm.obj.products, 'jiage').join();
            vm.obj.min = _.min(_.map(vm.obj.products, 'jiage'));
            var method = 'post';
            if (id != -1) {
                method = 'put';
            }
            Product.productEdit(method, vm.obj, null).then(function(response) {
                if (response.flag) {
                    alert('保存成功!');
                    $state.go('admin.product');
                } else {
                    alert('保存失败,请重试或联系管理员');
                }
            });
        }

        vm.deleteImg = function(index) {
            vm.obj.img.splice(index, 1);
        };

        Product.proType().then(function(response) {
            vm.brandTypes = response.brand || [];
            vm.proTypes = JSON.parse(response.json || '[]');
            vm.obj.ptype = ''; // 前台select 刷新需要
            return Product.bonusUser();
        }).then(function(response) {
            vm.bonusUser = response.bonus;
            if (id != -1) {
                Product.productEdit('get', null, {
                    uuid: id
                }).then(function(response) {
                    vm.obj = response.product;
                    for (var int = 0; int < vm.proTypes.length; int++) {
                        var n = vm.proTypes[int];
                        if (n.items.length) {
                            var o = _.find(n.items, {
                                'uuid': vm.obj.protype
                            }) || {};
                            if (o.name) {
                                vm.obj.ptype = n;
                                vm.obj._ptype = o.uuid;
                                break;
                            }
                        }
                    }

                    var bonus_phone = _.find(vm.bonusUser, {
                        'cellphone': vm.obj.bonus_phone
                    }) || {};
                    if (bonus_phone) {
                        vm.bonus_phone = bonus_phone;
                    }

                    for (var j = 0; j < vm.bonusUser.length; j++) {
                        var n = vm.bonusUser[j];
                        var o = _.find(n, {
                            'uuid': vm.obj.protype
                        }) || {};
                        if (o.name) {
                            vm.obj.ptype = n;
                            vm.obj._ptype = o.uuid;
                            break;
                        }
                    }
                    if (vm.obj.limitcount == -1) {
                        vm.obj.nocount = true;
                    }
                    if (vm.obj.times == -1) {
                        vm.obj.notimes = true;
                    }
                    if (vm.obj.bonus_phone == '') {
                        vm.obj.nobonus_phone = true;
                    }
                });
            }
        });

        $scope.$watch('vm.obj.ptype', function(countyObj) {
            vm.obj.protype = '';
        });
        $scope.$watch('vm.obj._ptype', function(newObj) {
            vm.obj.protype = newObj;
        });

    }
}());