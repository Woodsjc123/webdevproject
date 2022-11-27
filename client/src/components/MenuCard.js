import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/grid.css';
import axios from 'axios';
import authContext from '../auth/auth';

export default function MenuCard() {

    const {authenticated, setAuthenticated } = useContext(authContext);

    const [items, setItems] = useState([])

    const getItems = async () => {

        try {
          const {data} = await axios.get("http://localhost:3001/api/menu/getmenu");
          setItems(data);
        } 
        catch (error) {
          alert(error.message);
        }
      };

      const deleteItem = async (name) => {

        try {
          await axios.delete("http://localhost:3001/api/menu/deleteitem", name);
          
        }
        catch (error) {
          alert(error.message);
        }
      }


    const renderCard = (card, index) => {
        return(
            <Card style={{ width: '18rem', height: '26rem' }} key={index} className="box">
            <Card.Img variant="top" src={card.image}/>
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">€{card.price}</Card.Subtitle>
                <Card.Text>
                    {card.description}
                </Card.Text>
                <span>{authenticated ? <Button variant="danger" onClick={deleteItem(card.name)}>Delete</Button> : <br />}</span>
            </Card.Body>
            </Card>
        )
    }

    useEffect(() => {
        getItems();
      }, [])

    return (
        <div className='grid'>
            {items.map(renderCard)}
        </div>
    );
};
