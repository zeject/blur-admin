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
                    if (n === o) {
                        return;
                    }
                    if (!n && typeof o == "undefined") {
                        return;
                    }
                    if (typeof n == "undefined") {
                        return;
                    }
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