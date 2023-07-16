import "./Sidebar.scss";

const sidebar = [
  {
    title: "Accordion",
    path: "accordion",
  },
];

export default function Sidebar() {
  return (
    <div className="sidebar dev">
      <h3>Content</h3>

      <ul>
        {sidebar.map((item, index) => (
          <li key={index}>
            <a href={item.path || "/"}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
