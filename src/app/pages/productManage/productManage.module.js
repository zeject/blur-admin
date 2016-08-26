(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage', [, 'ui.select', 'BlurAdmin.pages.productManage.releaseList'])
        .config(productManage)

    /** @ngInject */
    function productManage($stateProvider) {
        $stateProvider
            .state('productManage', {
                url: '/productManage',
                abstract: true,
                template: '<ui-view></ui-view>',
                title: '产品管理',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            });
    }

}());