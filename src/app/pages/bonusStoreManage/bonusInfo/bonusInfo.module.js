(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusInfo', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('bonusStoreManage.bonusInfo', {
                url: '/bonusInfo',
                controller: 'bonusInfoCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusInfo/bonusInfo.html',
                title: '积分详情',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

}());