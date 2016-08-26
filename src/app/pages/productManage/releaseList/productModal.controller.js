(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.releaseList')
        .controller('productModalCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, data) {
        var vm = $scope.vm = data.vm;

    }

}());