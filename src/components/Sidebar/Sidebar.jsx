import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar open dev">
      <h3>Content</h3>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="dropdown.html">Dropdown</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
      </ul>
    </div>
  );
}
