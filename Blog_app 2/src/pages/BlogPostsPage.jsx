import posts from "../data/posts";
import BlogPost from "../components/BlogPost";
import CommentSection from "../components/CommentSection";

function BlogPostsPage() {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <BlogPost post={post} />
          <CommentSection />
        </div>
      ))}
    </>
  );
}

export default BlogPostsPage;