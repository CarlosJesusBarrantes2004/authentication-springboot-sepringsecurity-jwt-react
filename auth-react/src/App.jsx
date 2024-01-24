import NavBar from "./components/NavBar";
import RouterP from "./routers/RouterP";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <header className="bg-black px-4 py-2">
          <NavBar></NavBar>
        </header>
        <RouterP></RouterP>
      </div>
    </>
  );
}

export default App;
