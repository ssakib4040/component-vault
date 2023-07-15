import "./Sidebar.scss";

const sidebar = [
  {
    title: "Dropdown",
    path: "dropdown.html",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar open dev">
      <h3>Content</h3>

      <ul>
        {sidebar.map((item, index) => {
          return (
            <li key={index}>
              <a href={item?.path || "/"}>{item?.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
