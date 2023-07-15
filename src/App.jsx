import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

// pages
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch/NoMatch";
import Dropdown from "./pages/Dropdown/Dropdown";

export function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />

        <Content>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              {/* Components */}
              <Route path="dropdown.html" element={<Dropdown />} />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Content>
      </div>
    </>
  );
}
