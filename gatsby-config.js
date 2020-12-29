module.exports = {
  siteMetadata: {
    title: `Bryan Hong`,
    description: `The personal website for Bryan Hong.`,
    author: `@bryan_hong_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryan Hong`,
        short_name: `Bryan`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/bryan-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [
        require("tailwindcss"),
        require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
