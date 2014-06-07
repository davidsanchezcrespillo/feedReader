var App = angular.module('FeedReader', []);

App.controller("AllFeedsCtrl", function() {
  this.feeds = allFeeds;
  this.tags = allTags;
});

var allFeeds = [
  { name: 'CNN', url: 'http://rss.cnn.com/rss/cnn_topstories.rss' },
  { name: 'Mashable', url: 'http://feeds2.feedburner.com/Mashable' },
  { name: 'Huffington Post', url: 'http://feeds.huffingtonpost.com/huffingtonpost/raw_feed' },
  { name: 'LRT', url: 'http://gdata.youtube.com/feeds/base/users/LRTinklas/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile' }
];

var allTags = [ 'media', 'tv', 'radio', 'news' ];

