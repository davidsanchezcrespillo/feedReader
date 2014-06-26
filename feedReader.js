// The application instance
var App = angular.module('FeedReader', []);

// The controller
App.controller("AllFeedsCtrl", ['$scope', 'FeedService', function($scope, Feed) {
  this.allSources = allSources;
  this.tags = allTags;
  
  var allFeedsController = this;
  allFeedsController.currentFeeds = [];
  allFeedsController.feedTitle = '';
  
  this.loadFeed = function(e, feedSrc) {
    // DEBUG
    //console.log(feedSrc);        
    // END DEBUG

    Feed.parseFeed(feedSrc).then(function(res) {
      allFeedsController.currentFeeds = res.data.responseData.feed.entries;
      allFeedsController.feedTitle = res.data.responseData.feed.title;
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

/**
 * Feed sources.
 */
var allSources = [
  { 
    name: 'LRT', 
    url: 'http://gdata.youtube.com/feeds/base/users/LRTinklas/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile',
    tags: ['media', 'tv', 'news']
  },
  {
	name: 'Lithuanian Out Loud',
	url: 'http://lithuanian.libsyn.com/rss',
	tags: ['learning']  
  },
  {
	name: 'Ziniu Radijas',
	url: 'http://gdata.youtube.com/feeds/base/users/ZiniuTV/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile',
	tags: ['media', 'radio', 'news']
  },
  {
	name: 'Lietuvos Rytas',
	url: 'http://www.lrytas.lt/rss/',
	tags: ['media', 'news']
  },
  {
	  name: 'Lietuviskos Zinios',
	  url: 'http://lzinios.lt/rss/all/',
	  tags: ['news']
  },
  {
	  name: 'Bernardinai',
	  url: 'http://www.bernardinai.lt/rss/news',
	  tags: ['media', 'news']
  }
];

/**
 * Feed tags.
 */
var allTags = [
  {name: 'media'},
  {name: 'tv'},
  {name: 'radio'},
  {name: 'news'},
  {name: 'learning'}
];
