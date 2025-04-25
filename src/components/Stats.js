import { useState, useEffect } from "react";

export default function Stats() {
    const [data, setData] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/stats");
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
        <div className="page-container">
            <p> You can see the stats</p>
            <p>Total Post : {data}</p>
        </div>
    );
}