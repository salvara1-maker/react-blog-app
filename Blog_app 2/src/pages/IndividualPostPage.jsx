import { useParams } from "react-router-dom";
import posts from "../data/posts";
import CommentSection from "../components/CommentSection";

function IndividualPostPage() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <CommentSection />
    </div>
  );
}

export default IndividualPostPage;