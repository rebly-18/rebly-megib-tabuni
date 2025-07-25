import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Repository from "./sections/Repository";
import Footer from "./sections/Footer";
import "./App.css";
import ProjectsPage from "./pages/ProjectsPage";
import LabPage from "./pages/LabPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="bg-white dark:bg-[#0F172A] min-h-screen">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Repository />
              <Footer />
            </>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
