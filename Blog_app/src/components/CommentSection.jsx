import { useState } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !text) return;

    setComments([...comments, { name, text }]);
    setName("");
    setText("");
  };

  return (
    <div>
      <h3>Comments</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((c, i) => (
          <div key={i}>
            <strong>{c.name}</strong>
            <p>{c.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentSection;