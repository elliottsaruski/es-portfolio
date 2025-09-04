// import { Link } from "react-router-dom";
// import { navItems } from "../components/NavBar";

function Home() {
  return (
    <div className="p-8 min-w-dvw flex gap-15">
      {/* ---------------------------headline portion------------------------- */}
      <div>
        <h1 className="text-6xl font-bold">Elliott Saruski</h1>
        <p className="mt-2 text-lg">
          Front-End Engineer & Creative Technologist
        </p>
        <p className="text-md opacity-50 font-light">
          i love code music films etc. specialized in react
        </p>
        {/* ------------------cta's add here---------------------------- */}
        {/* <section className="grid gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-light hover:text-accent p-0.75 px-4 border rounded-md transition ${
                location.pathname === item.path ? "hidden" : "text-zinc-400"
              }`}>
              {item.label}
            </Link>
          ))}
        </section> */}
      </div>
      {/* ---------------------------canvas portion------------------------- */}
      <canvas className="border b-gray-800 h-fit flex-grow opacity-10 rounded-2xl drop-shadow-gray-50"></canvas>
    </div>
  );
}

export default Home;
