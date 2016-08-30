(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.bonusStoreManage.bonusStoreApply', [])
        .config(ConfigConfig)

    /** @ngInject */
    function ConfigConfig($stateProvider) {
        $stateProvider
            .state('bonusStoreManage.bonusStoreApply', {
                url: '/bonusStoreApply',
                controller: 'bonusStoreApplyCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusStoreApply/bonusStoreApply.html',
                title: '商户申请列表',
                sidebarMeta: {
                    order: 15,
                },
            }).state('bonusStoreManage.bonusStoreApplyAudit', {
                url: '/bonusStoreApplyAudit/{id}',
                controller: 'bonusStoreApplyAuditCtrl',
                templateUrl: 'app/pages/bonusStoreManage/bonusStoreApply/bonusStoreApplyAudit.html',
                title: '商户申请信息'
            });
    }

}());