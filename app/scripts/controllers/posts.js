'use strict';

/**
 * @ngdoc function
 * @name jessMakesThingsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the jessMakesThingsApp
 */
angular.module('jessMakesThingsApp')
  .controller('PostsCtrl', function ($scope, tumblrService) {
        $scope.postCtrl ={};
        $scope.postCtrl.blog = {};
        $scope.postCtrl.posts = {};

        tumblrService.getPosts().then(function(data){
            $scope.postCtrl.blog = data.response.blog;
            $scope.postCtrl.posts = data.response.posts;

        });
  });
