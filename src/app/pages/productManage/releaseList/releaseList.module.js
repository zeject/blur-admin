(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.releaseList', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('productManage.releaseList', {
                url: '/releaseList',
                controller: 'releaseListCtrl',
                templateUrl: 'app/pages/productManage/releaseList/releaseList.html',
                title: '产品发布列表',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

}());