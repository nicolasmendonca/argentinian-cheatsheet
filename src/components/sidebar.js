import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './sidebar.css';

export default function Sidebar() {
	const {
		allMarkdownRemark: { nodes: links },
	} = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				nodes {
					frontmatter {
						title
						path
					}
				}
			}
		}
	`);
	return (
		<nav className="sidebar">
			<p className="title">
				<span className="arg-flag" role="img" aria-label="argentinian-flag">🇦🇷</span>
				Cheatsheet
			</p>
			<ul>
				{links.map(({ frontmatter: { title, path } }) => (
					<li key={path}>
						<Link activeClassName="active" to={path}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
