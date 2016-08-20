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
                title: '产品购买信息',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            })
            .state('home.center', {
                url: '/center',
                controller: 'CenterCtrl',
                templateUrl: 'app/pages/home/center/center.html',
                title: '产品购买列表',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

}());