module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-intl",
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ["de", "en", "hu"],
        // language file path
        defaultLanguage: "en",
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
  ],
};
