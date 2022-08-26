/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'fullstack-gatsby-theme-bch-wallet-v1',
    // 'bch-wallet-plugin-postoffice',
    // {
    //   resolve: 'gatsby-plugin-compile-es6-packages',
    //   options: {
    //     modules: ['bch-wallet-plugin-postoffice']
    //   }
    // },
    // require.resolve('/home/trout/work/psf/gatsby-plugin-bch-sweep')
    'fullstack-gatsby-plugin-bch-sweep',
    'fullstack-gatsby-plugin-bch-create-token'
    // 'gatsby-plugin-bch-create-token'
  ],
  // https://www.gatsbyjs.com/docs/reference/release-notes/v2.28/#feature-flags-in-gatsby-configjs
  flags: {
    DEV_SSR: false
  }
}
