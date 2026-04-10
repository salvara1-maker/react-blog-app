import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>My Blog</h1>
      <p>Thoughts and ideas</p>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;