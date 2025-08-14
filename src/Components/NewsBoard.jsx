import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Ensure data.articles exists and is an array
        if (Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          console.error("Invalid data format", data);
          setArticles([]); // Set empty to prevent crash
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setArticles([]); // Also fallback to empty array on error
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
