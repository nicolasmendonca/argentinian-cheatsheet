const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage, createRedirect } = actions;

	createRedirect({
		fromPath: '/',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/food'
	})

	const blogPostTemplate = path.resolve(`src/templates/entry.js`);

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___title] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
							title
						}
					}
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: blogPostTemplate,
			context: {}, // additional data can be passed via context
		});
	});
};
