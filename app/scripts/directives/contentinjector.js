'use strict';

/**
 * @ngdoc directive
 * @name jessMakesThingsApp.directive:contentInjector
 * @description
 * # contentInjector
 */
angular.module('jessMakesThingsApp')
  .directive('contentInjector', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        element.html(attrs.contentInjector);
      }
    };
  });
