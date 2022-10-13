import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App bg-f0f0f0">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
