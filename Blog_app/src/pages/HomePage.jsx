import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to My Blog 🇲🇽</h1>
      <p>Explore posts, read content, and join the discussion.</p>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/blog">
          <button>Explore Blog</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;