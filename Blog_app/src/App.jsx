import { Routes, Route } from "react-router-dom";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home - list of posts */}
        <Route path="/" element={<BlogPostsPage />} />

        {/* Individual post */}
        <Route path="/post/:postId" element={<IndividualPostPage />} />

        {/* Contact page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;