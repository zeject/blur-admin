(function() {
    'use strict';

    angular
        .module('BlurAdmin.theme')
        .factory('Session', Factory)

    /** @ngInject */
    function Factory($window, $state, $timeout, $q) {
        var path = $state.current.name;

        return {
            set: set,
            get: get
        }

        function set(obj) {
            $window.sessionStorage.setItem(path, JSON.stringify(obj));
        }

        function get() {
            var deferred = $q.defer();
            $timeout(function() {
                var sessionStr = $window.sessionStorage.getItem(path);
                deferred.resolve(JSON.parse(sessionStr || '{}'));
            }, 0);
            return deferred.promise;
        }
    }

}());