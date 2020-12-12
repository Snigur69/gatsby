module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
              baseUrl: "wordpress.wg-an.site/",
              protocol: "http",
              restApiRoutePrefix: "wp-json",
              hostingWPCOM: false,
              useACF: true,
            },
          },
    ]
}