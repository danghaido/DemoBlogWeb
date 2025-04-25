import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/posts/${slug}`);
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load posts.");
      }
    };
    fetchPosts();
  }, [slug]);

  if (error) return <p>{error}</p>;

  if (!data) return <span>The blog post you've requested doesn't exist.</span>;

  return (
    <div className="post-container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
  );
}
