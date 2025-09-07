import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/playground", label: "Playground" },
  { path: "/components", label: "Components" },
  { path: "/music", label: "Music" },
];

function NavBar() {
  const location = useLocation();
  return (
    <nav className="p-4 flex gap-4 border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
      {/* <h2>ES</h2> */}
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium hover:text-accent transition ${
            location.pathname === item.path ? "text-white" : "text-zinc-400"
          }`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
