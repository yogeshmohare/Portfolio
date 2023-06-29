import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <div className="mx-auto max-w-screen-xl p-2 bg-white">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
