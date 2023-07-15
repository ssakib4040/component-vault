import { Routes, Route, Link } from "react-router-dom";

// components
import Header from "./components/Header/Header";

// pages
import Dropdown from "./pages/dropdown/Dropdown";

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="dropdown.html" element={<Dropdown />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
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
