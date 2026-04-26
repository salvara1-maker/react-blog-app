import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav style={{ background: "black", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2 style={{ color: "white", margin: 0 }}>My Blog</h2>

      <div>
        <Link to="/" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/contact" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
          Contact
        </Link>

        
        {!user && (
          <Link to="/login">
            <button style={{ marginLeft: "10px" }}>Login</button>
          </Link>
        )}

        
        {user && (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;