import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/grid.css';
import axios from 'axios';

export default function MenuCard() {

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
