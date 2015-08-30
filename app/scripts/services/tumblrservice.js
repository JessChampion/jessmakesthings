/**
 * @ngdoc service
 * @name jessMakesThingsApp.tumblrService
 * @description
 * # tumblrService
 * Service in the jessMakesThingsApp.
 */
angular.module('jessMakesThingsApp')
  .service('tumblrService', function ($http, $q) {
        'use strict';

        //Dev
        //consumer_key: 'tk4Sw0iIvhsUSNxvTGjf6W1QRUUrJFHtn3m0UQM5jfh1OvvhrE'

        //
        //var baseURl = 'http://api.tumblr.com/v2/blog/jess-makes-things.tumblr.com';
        //var key = 'tk4Sw0iIvhsUSNxvTGjf6W1QRUUrJFHtn3m0UQM5jfh1OvvhrE';
        //var apiKeyString = 'api_key';
        //
        ////api.tumblr.com/v2/blog/{base-hostname}/posts[/type]?api_key={key}&[optional-params=]
        //this.getPosts = function(){
        //    var url = baseURl + '/posts' + '?' + apiKeyString+'='+key+ '&callback=JSON_CALLBACK&data=';
        //    var deferred = $q.defer();
        //
        //    $http.jsonp(url)
        //        .then(function(json) {
        //            deferred.resolve(json.data);
        //        }, handleError);
        //    return deferred.promise;
        //};
        //
        //function handleError( response ) {
        //    if (
        //        ! angular.isObject( response.data ) ||
        //        ! response.data.message
        //    ) {
        //        return( $q.reject( 'An unknown error occurred.' ) );
        //    }
        //    // Otherwise, use expected error message.
        //    return( $q.reject( response.data.message ) );
        //}

        this.getPosts = function () {
            var deferred = $q.defer();

            $.getJSON('/assets/posts.json', function (json) {
                deferred.resolve(json);
            });

            return deferred.promise;
        };
    });

