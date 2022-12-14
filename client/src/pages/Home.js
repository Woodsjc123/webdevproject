import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import MenuList from "../components/MenuList.js";
import MenuCard from "../components/MenuCard.js";
import authContext from "../auth/auth";
import adminContext from "../auth/admin";

export default function Home() {


  const {authenticated, setAuthenticated } = useContext(authContext);
  const {admin, setAdmin} = useContext(adminContext);
  
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
        <br />


        <h2 >Menu</h2>
        <hr />

        <MenuCard />

        <br />
        <hr />
        <span >
        {authenticated ? <MenuList /> : <br />}
        </span>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </div>
    
  );
}
