import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function PostList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/posts");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load posts.");
      }
    };
    fetchPosts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.slug} className = "blog-container">
            <Link to={`/posts/${post.slug}`}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}