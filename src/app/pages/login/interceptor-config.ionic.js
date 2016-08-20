'use strick';

/**
 * post 提交参数
 */
/*
 * angular.module("app", []) .config(["$httpProvider", function($httpProvider) {
 * $httpProvider.defaults.transformRequest = [ function(request) { return
 * $.param(request); } ]; } ]);
 */
angular.module('LoginAdmin').factory('HttpInterceptor', function($rootScope, $q, $timeout, $injector) {
	var timeout;
	var httpInterceptor = {
		'responseError': function(response) {
			/*
			 * if (timeout) { $timeout.cancel(timeout);
			 * $rootScope.$emit("dataLoad", false); }
			 */
			return $q.reject(response);
		},
		'response': function(response) {
			return response;
		},
		'request': function(config) {
			// console.log(~config.url.indexOf('/u/'));
			if (!!~config.url.indexOf('http://')) {

			} else if (!~config.url.indexOf('html')) {
				config.url = 'http://127.0.00.1:8080' + config.url;
			}
			return config;
		},
		'requestError': function(config) {
			return $q.reject(config);
		}
	}
	return httpInterceptor;
});

angular.module('LoginAdmin').config(function($httpProvider) {
	$httpProvider.interceptors.push('HttpInterceptor');
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
	// Override $http service's default transformRequest
	$httpProvider.defaults.transformRequest = [function(data) {
		/**
		 * The workhorse; converts an object to x-www-form-urlencoded
		 * serialization.
		 * 
		 * @param {Object}
		 *            obj
		 * @return {String}
		 */
		var param = function(obj) {
			var query = '';
			var name, value, fullSubName, subName, subValue, innerObj, i;

			for (name in obj) {
				value = obj[name];

				if (value instanceof Date) {
					var month = +value.getMonth() + 1;
					var day = value.getDate();
					query += encodeURIComponent(name) + '=' + value.getFullYear() + '-' +
						(((month + '').length < 2) ? ('0' + month) : month) + '-' +
						(((day + '').length < 2) ? ('0' + day) : day) + '&';
				} else if (value instanceof Array) {
					for (i = 0; i < value.length; ++i) {
						subValue = value[i];
						fullSubName = name;
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += param(innerObj) + '&';
					}
				} else if (value instanceof Object) {
					for (subName in value) {
						subValue = value[subName];
						fullSubName = name + '[' + subName + ']';
						innerObj = {};
						innerObj[fullSubName] = subValue;
						query += param(innerObj) + '&';
					}
				} else if (value !== undefined && value !== null) {
					query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
				}
			}
			return query.length ? query.substr(0, query.length - 1) : query;
		};

		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}];
});