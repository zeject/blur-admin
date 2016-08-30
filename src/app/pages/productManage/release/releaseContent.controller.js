(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.release')
        .controller('releaseContent', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $state, $stateParams, Product) {
        var vm = $scope.vm = {};

        vm.imgs = [];

        vm.delImg = function(index) {
            vm.imgs.splice(index, 1);
        }

        vm.submit = function() {
            Product.productContent('post', {
                imgs: vm.imgs,
                uuid: $stateParams.uuid
            }).then(function(response) {
                if (response.flag) {
                    alert("保存成功!");
                    $state.go('productManage.releaseList');
                }
            });
        }

        Product.productContent('get', null, {
            uuid: $stateParams.uuid
        }).then(function(response) {
            vm.imgs = _.map(response.imglist, 'imgurl');
        });
    }

}());