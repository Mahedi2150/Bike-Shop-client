import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';

const Service = (props) => {
    const { _id, name, img, Description, price } = props.service;
    const descrip = Description?.slice(0, 200);
    return (
        <div className="container">

            <Zoom>
                <Card style={{ marginTop: "25px", border: "2px solid black" }}>
                    <Card.Img variant="top" className="imgStyle" style={{ objectFit: "cover", height: "280px" }} src={img} width="100%" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="priceTimeStyle">
                            <Card.Text >Cost : &#2547; {price}</Card.Text>
                            <Card.Text className="">{descrip}</Card.Text>
                        </div>
                        <Link to={`/bikes/${_id}`}><button className="btn-info px-4 py-1 mt-2 rounded-2 border-0 ">Details</button></Link>
                    </Card.Body>
                </Card>
            </Zoom>
        </div>
    );
};

export default Service;