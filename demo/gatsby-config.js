module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-anchor',
      options: {
        anchorRss: 'https://anchor.fm/s/4b4180c/podcast/rss',
        cmsFolder: `${__dirname}/cms`,
        cmsClientConfig: `${__dirname}/static`,
      },
    },
  ],
};
