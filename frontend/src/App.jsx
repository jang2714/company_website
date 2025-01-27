import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Footer/>
    </BrowserRouter>
  );
  
}

export default App;
