module.exports = {
  name: '二二不得四',
  author: 'YP',
  url: 'http://2x2isnot4.com/',
  meta: {
    keywords: 'YP, Yang, 个人, blog',
    description: '二二不得四: 胡写一气',
    'apple-mobile-web-app-title': '二二不得四',
  },
  icon: '/favicon.png',
  rss: 'http://2x2isnot4.com/atom.xml',
  css: [
    '/css/style.css?v=1.0.0'
  ],
  scripts: [],

  blog: {
    postUrlPrefix: '/posts',
    tagUrlPattern: '/tag/{{tag}}',
    pageUrlPattern: '/page/{{page}}',
    pagination: 10
  },

  pageData: {
    '404.html': {
      title: '404 Not Found'
    },
    'archive.html': {
      title: 'All posts'
    }
  },

  plugins: {
    disqus: '2x2isnot4',
    googleAnalytics: 'UA-48373896-3'
  }
};
