(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.home', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<ui-view></ui-view>',
                abstract: true,
                title: 'home',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            })
            .state('home.center', {
                url: '/center',
                controller: 'CenterCtrl',
                templateUrl: 'app/pages/home/center/center.html',
                title: 'home',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

}());