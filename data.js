
var appData = {
  /* Feed sources. */
  allSources: [
  { 
    name: 'LRT Videos', 
    url: 'http://gdata.youtube.com/feeds/base/users/LRTinklas/uploads?alt=rss&amp;v=2&amp;orderby=published&amp;client=ytapi-youtube-profile',
    tags: ['media', 'tv', 'news']
  },
  {
	  name: 'LRT Mokslas ir IT',
      url: 'http://www.lrt.lt/naujienos/mokslas_ir_it?rss',
      tags: ['media', 'news']
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
  },
  {
	  name: 'Delfi Lietuvoje',
	  url: 'http://www.delfi.lt/rss/feeds/lithuania.xml',
	  tags: ['media', 'news']
  },
  {
	  name: '15Min',
	  url: 'http://www.15min.lt/rss',
	  tags: ['media', 'news']
  }
  ],

  /* Feed tags. */
  allTags: [
    {name: 'media'},
    {name: 'tv'},
    {name: 'radio'},
    {name: 'news'},
    {name: 'learning'}
  ],
  
  /* Application title. */
  appTitle : 'LT Feeds',
  /* Application logo image */
  appLogo : 'lithuanian_flag.png',
  /* Application description */
  appDescription : 'Some feeds that might be useful for Lithuanian language learners'
};
