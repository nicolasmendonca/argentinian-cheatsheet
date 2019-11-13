var options = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
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
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-emojis',
						// options: {
						// Deactivate the plugin globally (default: true)
						// active: true,
						// Add a custom css class
						// class: 'emoji-icon',
						// Select the size (available size: 16, 24, 32, 64)
						// size: 64,
						// Add custom styles
						// styles: {
						// 	display: 'inline',
						// 	margin: '0',
						// 	'margin-top': '1px',
						// 	position: 'relative',
						// 	top: '5px',
						// 	width: '25px',
						// },
						// },
					},
					'gatsby-remark-embedder',
				],
			},
		},
	],
};

module.exports = options;
