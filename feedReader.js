var App = angular.module('FeedReader', []);

App.controller("AllFeedsCtrl", ['$scope', 'FeedService', function($scope, Feed) {
  this.feeds = allFeeds;
  this.tags = allTags;

  this.loadFeed=function(e, feedSrc){        
    Feed.parseFeed(feedSrc).then(function(res){
      $scope.loadButonText=angular.element(e.target).text();
      $scope.feeds=res.data.responseData.feed.entries;
    });
  }
}]);

App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
  $scope.loadButonText="Load";

}]);

App.factory('FeedService',['$http',function($http){
  return {
    parseFeed : function(url){
      return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
    }
  }
}]);

var allFeeds = [
  { 
    name: 'CNN',
    url: 'http://rss.cnn.com/rss/cnn_topstories.rss',
    tags: ['news', 'tv']
  },
  { 
    name: 'Mashable',
    url: 'http://feeds2.feedburner.com/Mashable',
    tags: ['news']
  },
  { 
    name: 'Huffington Post', 
    url: 'http://feeds.huffingtonpost.com/huffingtonpost/raw_feed',
    tags: ['news']
  },
  { 
    name: 'LRT', 
    url: 'http://gdata.youtube.com/feeds/base/users/LRTinklas/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile',
    tags: ['media', 'tv', 'news']
  }
];

var allTags = [ {name: 'media'}, {name: 'tv'}, {name: 'radio'}, {name: 'news'} ];

