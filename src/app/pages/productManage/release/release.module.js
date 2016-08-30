(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.release', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('productManage.release', {
                url: '/release/{id}',
                controller: 'releaseCtrl',
                templateUrl: 'app/pages/productManage/release/release.html',
                title: '产品发布',
                sidebarMeta: {
                    order: 0,
                },
            }).state('productManage.releaseContent', {
                url: '/releaseContent/{uuid}',
                controller: 'releaseContent',
                templateUrl: 'app/pages/productManage/release/releaseContent.html',
                title: '产品详细'
            });
    }

}());