import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import MenuList from "../components/MenuList.js";
import MenuCard from "../components/MenuCard.js";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  
  return (
    <div>
      <div>
      <html lang="en" />
      </div>

      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

        <title>Restaurant App</title>
      </head>
      <body>

        <h1>Sushijet</h1>
        <h3>/////////////////////////////</h3>
        <h3>お尻を食べる</h3>

        <h2 >Menu</h2>
        <hr />

        <MenuCard />

        <br />
        <hr />
        <MenuList />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </div>
    
  );
}
