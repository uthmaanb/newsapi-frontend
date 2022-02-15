import React from "react";

const Article = ({ title, author, content, url }) => {
	return (
		<div className="article">
			<h2>{title}</h2>
			<h4>{author}</h4>
			<p>{content}</p>
			<a href={url} target="_blank" rel="noopener noreferrer">
				Read more..
			</a>
		</div>
	);
};

export default Article;
