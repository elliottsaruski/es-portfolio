import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/playground" element={<Playground />} /> */}
          {/* <Route path="/components" element={<Components />} /> */}
          {/* <Route path="/music" element={<Music />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
