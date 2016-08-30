(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStore', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('bonusStoreManage.bonusStore', {
                url: '/bonusStore',
                controller: 'bonusStoreCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusStore/bonusStore.html',
                title: '已加盟商家',
                sidebarMeta: {
                    order: 10,
                },
            }).state('bonusStoreManage.bonusStoreAudit', {
                url: '/bonusStoreAudit/{id}',
                controller: 'bonusStoreAuditCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusStore/bonusStoreAudit.html',
                title: '商家信息修改'
            }).state('bonusStoreManage.bonusStoreReview', {
                url: '/bonusStoreReview/{id}?name',
                controller: 'bonusStoreReviewCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusStore/bonusStoreReview.html',
                title: '商家评论信息'
            });
    }
}());