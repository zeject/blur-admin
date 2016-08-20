(function() {
    'use strict';

    angular
        .module('BlurAdmin.theme')
        .directive('cutDelay', cutDelay);

    /** @ngInject */
    function cutDelay($timeout) {
        return {
            restrict: 'A',
            scope: {
                ngModel: '=',
                cutDelayFunc: '&'
            },
            link: function($scope, elem, attr) {
                var time;
                $scope.$watch('ngModel', function(n, o) {
                    if (time) {
                        $timeout.cancel(time);
                    }
                    time = $timeout(function() {
                        $scope.cutDelayFunc();
                    }, 500);
                });
            }
        }
    }

}());