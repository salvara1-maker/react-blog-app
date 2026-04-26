import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function IndividualPostPage() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const { user: loggedInUser } = useContext(AuthContext);

  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        );
      })
      .then((res) => res.json())
      .then((userData) => setUser(userData))
      .catch((err) => console.error(err));
  }, [postId]);

  
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, [postId]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText) {
      alert("Please write a comment");
      return;
    }

    const newComment = {
      name: loggedInUser.username,
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

      
      {!loggedInUser ? (
        <p style={{ color: "white" }}>
          Please log in to leave a comment.
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
           
            <input
              type="text"
              value={loggedInUser.username}
              readOnly
            />

            <textarea
              placeholder="Your comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </>
      )}

      
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