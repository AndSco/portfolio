module.exports = {
  siteMetadata: {
    title: `Andrea Scorcia | JS Developer`,
    description: `Personal website & portfolio of Andrea Scorcia, Brno-based Javascript & ReactJS developer`,
    author: "Andrea Scorcia"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .1,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gugi`,
          `Ubuntu Mono`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
