(function() {
    'use strict';

    angular
        .module('LoginAdmin')
        .controller('LoginAdminCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http) {

        $scope.error = true;

        $scope.signIn = function() {
            $http({
                method: 'post',
                url: '/oologin',
                data: $scope.login
            }).success(function(response) {
                console.log(response);
                $scope.error = response;
                if ($scope.error) {
                    //window.location.href = '/';
                }
            }).error(function(error) {

            });
        }
    }

}());