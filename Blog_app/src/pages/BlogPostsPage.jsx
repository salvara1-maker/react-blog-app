import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); 
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading posts...</h2>;

  return (
    <div className="container">
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 80)}...</p>

          <Link to={`/post/${post.id}`}>Read More →</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostsPage;