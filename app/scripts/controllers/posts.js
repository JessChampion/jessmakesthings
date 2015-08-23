/**
 * @ngdoc function
 * @name jessMakesThingsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the jessMakesThingsApp
 */
angular.module('jessMakesThingsApp')
  .controller('PostsCtrl', function ($scope, $rootScope, tumblrService) {
        'use strict';
        $scope.postCtrl ={};
        $scope.postCtrl.blog = {};
        $scope.postCtrl.posts = {};
        $scope.postCtrl.placeholders = [];

        $scope.postCtrl.postIconClicked = function(){
            $rootScope.$broadcast('openPost');
        }

        tumblrService.getPosts().then(function(data){
            $scope.postCtrl.blog = data.response.blog;
            $scope.postCtrl.posts = data.response.posts;
            //extract images
            angular.forEach($scope.postCtrl.posts,function(value){
                if(value.photos=== undefined){
                    findImages(value);
                }
            });
            //create placeholders
            for(var x=0; x<=($scope.postCtrl.posts.length % 3); x++){
                $scope.postCtrl.placeholders.push(x);
            }
        });

        function findImages(post) {
            post.photos = [];

            if (post.body !== undefined) {
                var text = post.body;
                var s = text.search(/src="http:\/\/[0-9]*.media.tumblr.com\//)+5;
                var e = text.indexOf('"',s);
                var i = text.substring(s,e);
                post.photos.push({original_size:{url:i}});
            }
            else if(post.thumbnail_url !== undefined){
                post.photos.push({original_size:{url:post.thumbnail_url}});
            }

        }
  });
