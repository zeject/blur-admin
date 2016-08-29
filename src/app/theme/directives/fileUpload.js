(function() {
	'use strict';

	angular
		.module('BlurAdmin.theme')
		.directive('fileUploadImg', directive);


	/** @ngInject */
	function directive(FileUploader) {
		return {
			restrict: 'EA',
			template: '<input nv-file-select="" uploader="upload" multiple/>',
			// template : '<div ng-transclude></div>',
			scope: {
				fileImgs: '=',
				fileLimit: '@'
			},
			transclude: true,
			replace: true,
			controller: function($scope) {
				$scope.upload = new FileUploader({
					url: 'http://127.0.0.1:8080/admin/product/upload?c=' + Math.random(),
					autoUpload: false
				});
				$scope.upload.filters.push({
					name: 'imageFilter',
					fn: function(item, options) {
						var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
						return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
					}
				});
			},
			link: function(scope, element, attributes) {
				var upload = scope.upload;
				if (!scope.fileLimit) {
					scope.fileLimit = 1;
				}
				upload.onAfterAddingAll = function(addedFileItems) {
					if (scope.fileImgs.length + addedFileItems.length > scope.fileLimit) {
						alert('超出文件数量最大限制!');
						return;
					}
					for (var i = 0; i < addedFileItems.length; i++) {
						if (scope.fileImgs.length < scope.fileLimit) {
							addedFileItems[i].upload();
						} else {
							addedFileItems[i].remove();
							alert('超出文件数量最大限制!');
							return;
						}
					}
				};
				upload.onCompleteItem = function(fileItem, response, status, headers) {
					for (var i = 0; i < response.imglist.length; i++) {
						scope.fileImgs.push('http://webimg.mp12345.com' + response.path + response.imglist[i]);
					}
				};
			}
		};
	}

}());