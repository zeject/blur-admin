(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage', [
            'ui.select',
            'BlurAdmin.pages.productManage.release',
            'BlurAdmin.pages.productManage.releaseList'
        ])
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
                    icon: 'fa fa-cubes',
                    order: 0,
                },
            });
    }

}());