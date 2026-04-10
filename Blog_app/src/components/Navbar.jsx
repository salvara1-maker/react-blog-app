import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "black", padding: "1rem" }}>
      <h2 style={{ color: "white" }}>My Blog Navbar</h2>

      <div>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>

        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;