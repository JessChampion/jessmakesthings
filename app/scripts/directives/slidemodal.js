'use strict';

/**
 * @ngdoc directive
 * @name jessMakesThingsApp.directive:SlideModal
 * @description
 * # SlideModal
 */
angular.module('jessMakesThingsApp')
  .directive('slideModal', function () {
    return {
      templateUrl: 'views/slideModal.html',
      restrict: 'EA',
      scope:{
        modalContent: '='
      },
      controller: function($scope, $timeout){
        $scope.slideModal = {};
        $scope.slideModal.isOpen = false;
        $scope.slideModal.close = function(){
            $scope.slideModal.isOpen = false;
            $($scope.slideModal.element).removeClass('open').addClass('closing');
            $timeout(function() {
                $($scope.slideModal.element).removeClass('closing').addClass('closed');
                $scope.slideModal.backdrop.remove();
            },800);
        };

        $scope.$on('openPost', function(event, args) {
            $scope.slideModal.isOpen = true;
            addModalBackdrop();
        });

        function addModalBackdrop(){
            angular.element(document.body).append($scope.slideModal.backdrop);
            $($scope.slideModal.element).removeClass('closed').addClass('open');
        }


      },
      link: function postLink(scope, element) {
        scope.slideModal.element = $('.slide-modal',element)[0];
        scope.slideModal.backdrop = angular.element('<div class="modal-backdrop slide-modal-backdrop" ng-click="slideModal.close"></div>');
        $(scope.slideModal.backdrop).click(scope.slideModal.close);
        $(element).click(scope.slideModal.close);
      }
    };
  });
