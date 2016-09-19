module.exports = {
  name: 'website',
  author: 'author',
  url: 'http://localhost:3000',
  meta: {
    keywords: 'static website',
    description: 'this is an awesome website',
    'apple-mobile-web-app-title': 'static website',
  },
  icon: '/favicon.png',
  rss: 'http://localhost:3000/atom.xml',
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
    disqus: '',
    googleAnalytics: ''
  }
};
