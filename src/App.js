import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Member from "./Member";
import Project from "./Project";
import Photo from "./Photo";
import Publish from "./Publish";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div class="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/project" element={<Project />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/about" element={<About />} />
        </Routes>{" "}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
