(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStore')
        .controller('bonusStoreReviewCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http, $stateParams) {
        var vm = $scope.vm = {};
        var id = $stateParams.id;
        vm.name = $stateParams.name;
        $http.get('/admin/storeReview/' + id).success(function(response) {
            vm.storeReview = response.storeReview;
        });

    }
}());