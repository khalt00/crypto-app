import "./App.css";
import {
  Navbar,
  Footer,
  HomePage,
  Currencies,
  Exchanges,
  News,
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/HomePage" element={<HomePage />} />

              <Route exact path="/Currencies" element={<Currencies />} />

              <Route exact path="/Exchanges" element={<Exchanges />} />

              <Route exact path="/News" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
