
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

var appTitle = 'LT Feeds';
var appLogo = 'lithuanian_flag.png';
var appDescription = 'Some feeds that might be useful for Lithuanian language learners';
