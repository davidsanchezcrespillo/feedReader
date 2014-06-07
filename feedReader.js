var App = angular.module('FeedReader', []);

App.controller("AllFeedsCtrl", function() {
  this.feeds = allFeeds;
  this.tags = allTags;
});

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

