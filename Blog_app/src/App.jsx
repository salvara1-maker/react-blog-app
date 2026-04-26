import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"; 
import ProtectedRoute from "./components/ProtectedRoute"; 
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          
          <Route path="/" element={<HomePage />} />

          
          <Route path="/login" element={<LoginPage />} />

          
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <BlogPostsPage />
              </ProtectedRoute>
            }
          />

          
          <Route path="/post/:postId" element={<IndividualPostPage />} />

          
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;