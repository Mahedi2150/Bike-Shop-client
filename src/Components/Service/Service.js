import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, img, Description, price } = props.service;
    const descrip = Description?.slice(0, 200);
    return (
        <div className="container">
            {/*  <div className="row g-0 border border-warning mb-5 p-1 ">
                <div className="col-md-4 ">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{descrip} <span> <b> Read More...</b></span></p>
                        <p>Cost : &#2547; {price}</p>
                        <Link to={`/bikes/${_id}`}><button className="btn-info px-4 py-1 rounded-2 border-0 ">Details</button></Link>
                    </div>
                </div>
            </div> */}

            <Card>
                <Card.Img variant="top" className="imgStyle" src={img} width="100%" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="priceTimeStyle">
                        <Card.Text >Cost : &#2547; {price}</Card.Text>
                        <Card.Text>{descrip}</Card.Text>
                    </div>
                    <Link to={`/bikes/${_id}`}><button className="btn-info px-4 py-1 rounded-2 border-0 ">Details</button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;