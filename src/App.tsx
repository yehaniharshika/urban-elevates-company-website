import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
