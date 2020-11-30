module.exports = {
  siteName: 'Matthew Jarman',
  titleTemplate: '%s | Matthew Jarman',
  siteUrl: 'https://MattJarman.github.io',
  pathPrefix: '/portfolio',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/portfolio/*.md',
        typeName: 'Portfolio'
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
