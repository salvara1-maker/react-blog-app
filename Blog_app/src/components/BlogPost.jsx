import { useState } from "react";

function BlogPost({ post }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <p>
        <strong>{post.author}</strong> | {post.date}
      </p>

      <button onClick={() => setLikes(likes + 1)}>
        👍 Like ({likes})
      </button>
    </div>
  );
}

export default BlogPost;