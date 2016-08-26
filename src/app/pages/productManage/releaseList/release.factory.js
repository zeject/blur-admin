(function() {
    'use strict';

    angular
        .module('BlurAdmin.pages.productManage.releaseList')
        .factory('ProductService', Factory)

    /** @ngInject */
    function Factory($q, $http) {
        return {
            qqh: function(method, obj, params) {
                var deferred = $q.defer();
                $http({
                    url: '/admin/qqh',
                    method: method,
                    data: obj,
                    params: params
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            productParams: function(method, obj, params) {
                var deferred = $q.defer();
                $http({
                    url: '/admin/product/prarms',
                    method: method,
                    data: obj,
                    params: params
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            productContent: function(method, obj, params) {
                var deferred = $q.defer();
                $http({
                    url: '/admin/product/content',
                    method: method,
                    data: obj,
                    params: params
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            product: function(method, obj, params) {
                var deferred = $q.defer();
                $http({
                    url: '/admin/prolist',
                    method: method,
                    data: obj,
                    params: params
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            productEdit: function(method, obj, params) {
                var deferred = $q.defer();
                $http({
                    url: '/admin/product/edit',
                    method: method,
                    data: obj,
                    params: params
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            productFlag: function(obj) {
                var deferred = $q.defer();
                $http.get('/admin/product/flag', {
                    params: obj
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            productTop: function(obj) {
                var deferred = $q.defer();
                $http.get('/admin/product/top', {
                    params: obj
                }).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    }

}());