var App = angular.module('FeedReader', []);

App.controller("AllFeedsCtrl", ['$scope', 'FeedService', function($scope, Feed) {
  this.allSources = allSources;
  this.tags = allTags;

  this.loadFeed=function(e, feedSrc){        
    Feed.parseFeed(feedSrc).then(function(res) {
      $scope.feeds=res.data.responseData.feed.entries;
    });
  }
}]);

App.factory('FeedService',['$http',function($http){
  return {
    parseFeed : function(url){
      return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
    }
  }
}]);

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
  }
];

var allTags = [ {name: 'media'}, {name: 'tv'}, {name: 'radio'}, {name: 'news'}, {name: 'learning'} ];

