(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.release', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('productManage.release', {
                url: '/release',
                controller: 'releaseCtrl',
                templateUrl: 'app/pages/productManage/release/release.html',
                title: '产品发布',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

}());