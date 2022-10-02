import "./App.css";
import Navbar1 from "../src/components/navbar";
import Footer from "../src/components/footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
