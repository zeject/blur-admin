(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productBuyerInfo', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('productBuyerInfo', {
                url: '/productBuyerInfo',
                controller: 'CenterCtrl',
                templateUrl: 'app/pages/productBuyerInfo/center/center.html',
                title: '产品购买信息',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            });
    }

}());