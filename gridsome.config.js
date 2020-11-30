module.exports = {
  siteName: 'Matthew Jarman',
  titleTemplate: '%s | Matthew Jarman',
  siteUrl: 'https://www.mattjarman.me',
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
  },
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
    config.resolve.alias.set('@icons', '@/assets/icons')
  }
}
