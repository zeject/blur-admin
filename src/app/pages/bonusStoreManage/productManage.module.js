(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage', [
            'BlurAdmin.pages.bonusStoreManage.bonusInfo',
            'BlurAdmin.pages.bonusStoreManage.bonusStore',
            'BlurAdmin.pages.bonusStoreManage.bonusStoreApply'
        ])
        .config(bonusStoreManage)

    /** @ngInject */
    function bonusStoreManage($stateProvider) {
        $stateProvider
            .state('bonusStoreManage', {
                url: '/bonusStoreManage',
                abstract: true,
                template: '<ui-view></ui-view>',
                title: '积分管理',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0,
                },
            });
    }

}());