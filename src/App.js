import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import MyProjects from "./components/Home/MyProjects";
import SingleProject from "./components/Home/SingleProject";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<MyProjects></MyProjects>}></Route>
        <Route
          path="/projects/:id"
          element={<SingleProject></SingleProject>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
