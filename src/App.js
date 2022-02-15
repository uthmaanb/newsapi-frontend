import React, { useEffect, useState } from "react";
import Article from "./components/Article";
import "./styles/App.css";

const App = () => {
	const [articles, setArticles] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("Apple");

	useEffect(() => {
		getArticles();
	}, [query]);

	const getArticles = async () => {
		const response = await fetch(
			`http://localhost:8080/articles?search=${encodeURIComponent(query)}`
		);
		const data = await response.json();
		setArticles(data.articles);
		console.log(data.articles);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="App">
			<div className="title">
				<h1 className="title-head">
					<img
						className="emij"
						src={require("./assets/internet-explorer.png")}
						alt="logo"
					/>
					Explorer News
				</h1>
				<q>News thats an hour late because thats the best we can do.</q>
			</div>

			<form className="search-form" onSubmit={getSearch}>
				<input
					className="search-bar"
					type="text"
					placeholder="Search"
					required
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="articles">
				{articles.map((article) => (
					<Article
						key={article.title}
						title={article.title}
						author={article.author}
						content={article.content}
						url={article.url}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
