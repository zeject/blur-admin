(function() {
    'use strict';

    angular
        .module('BlurAdmin.theme')
        .directive('domClick', directive);


    /** @ngInject */
    function directive() {
        return {
            restrict: 'EA',
            scope: {},
            link: function(scope, element) {
                var id = element.attr('dom-click');
                element.bind('click', function(e) {
                    document.getElementById(id).click();
                })
            }
        }
    }

}());