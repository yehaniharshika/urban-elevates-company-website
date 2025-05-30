import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsDisplay from "./pages/ProjectsDisplay/ProjectsDisplay";
import AboutDetails from "./pages/AboutDetails/AboutDetails";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectsDisplay />} />
          <Route path="/aboutDetails" element={<AboutDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
