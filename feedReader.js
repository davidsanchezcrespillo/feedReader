// The application instance
var App = angular.module('FeedReader', []);

// The controller
App.controller("AllFeedsCtrl", ['$scope', 'FeedService', function($scope, Feed) {
  var allFeedsController = this;

  allFeedsController.appData = appData;
  allFeedsController.currentFeeds = [];
  allFeedsController.feedTitle = '';
  allFeedsController.feedUrl = '';
  
  this.loadFeed = function(e, feedSrc) {
    // DEBUG
    //console.log(feedSrc);        
    // END DEBUG

    Feed.parseFeed(feedSrc).then(function(res) {
      allFeedsController.currentFeeds = res.data.responseData.feed.entries;
      allFeedsController.feedTitle = res.data.responseData.feed.title;
      allFeedsController.feedUrl = res.data.responseData.feed.feedUrl;
      // DEBUG
      console.log(res.data.responseData.feed);
      //console.log(allFeedsController.currentFeeds);
      // END DEBUG
    });
  }
}]);

// The feed service
App.factory('FeedService', ['$http', function($http) {
  return {
    parseFeed: function(url) {
      return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
    }
  }
}]);

// A directive to display all the feed items
App.directive('displayFeedItems', function() {
	return {
		restrict: 'E',
		templateUrl: 'display-feed-items.html'
	};
});
