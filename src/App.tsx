import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

// pages
import Accordion from "./pages/Accordion/Accordion";

export default function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <Sidebar />

        <Content>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="accordion" element={<Accordion />} />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Content>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
