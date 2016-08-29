(function() {
    'use strict';

    angular
        .module('BlurAdmin.theme')
        .factory('Factory', Factory)

    /** @ngInject */
    function Factory(Dependencies) {

        return {
            fn: fn
        }

        function fn() {

        }
    }

}());