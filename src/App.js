import "./App.css";
import {
  Navbar,
  Footer,
  HomePage,
  Currencies,
  Exchanges,
  News,
  Detail,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="home">
        <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />

              <Route exact path="/Currencies" element={<Currencies />} />

              <Route exact path="/Exchanges" element={<Exchanges />} />

              <Route exact path="/detail/:id" element={<Detail />} />

              <Route exact path="/News" element={<News />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
