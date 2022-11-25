import { useState, useEffect } from "react";
import './css/App.css';
import Navbar from "./components/Navbar.js";
import Menu from "./components/Menu.js";


export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  
  return (
    <div className="App">

      <header>
        <Navbar />
        <h1>Restaurant App</h1>
      </header>


      <Menu />

    </div>
  );
}
