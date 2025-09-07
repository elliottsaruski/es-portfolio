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
        {/* ------------------cta add here---------------------------- */}
      </div>
      {/* ---------------------------canvas portion------------------------- */}
      <canvas className="border b-gray-800 h-fit flex-grow opacity-10 rounded-2xl drop-shadow-gray-50"></canvas>
    </div>
  );
}

export default Home;
