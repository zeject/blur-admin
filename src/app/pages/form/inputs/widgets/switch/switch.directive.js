/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        switchChange: '&',
        ngModel: '='
      },
      template: function(el, attrs) {
        return '<div class="switch-container ' + (attrs.color || '') + '"><input type="checkbox" ng-model="ngModel"></div>';
      },
      link: function(scope, elem, attr) {
        $timeout(function() {
          var input = $(elem).find('input');
          input.bootstrapSwitch({
            size: attr.switchSize || 'small',
            onColor: attr.color,
            onText: '是',
            offText: '否'
          });
          input.on('switchChange.bootstrapSwitch', function(event, state) {
            scope.ngModel = state;
            scope.$apply();
            scope.switchChange();
          });

        });
      }
    };
  }
})();