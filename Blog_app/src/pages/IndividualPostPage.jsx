import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IndividualPostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  // fetch post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

        // fetch user
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        );
      })
      .then((res) => res.json())
      .then((userData) => setUser(userData))
      .catch((err) => console.error(err));
  }, [postId]);

  // fetch comments
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, [postId]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !commentText) {
      alert("Please fill out all fields");
      return;
    }

    const newComment = {
      name,
      body: commentText,
    };

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setComments([data, ...comments]);
        setName("");
        setCommentText("");
      });
  };

  if (!post) return <h2>Loading post...</h2>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {user && (
        <div className="author">
          <p><strong>Author:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <h2>Comments</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* COMMENTS */}
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="comment">
            <strong>{c.name}</strong>
            <p>{c.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default IndividualPostPage;