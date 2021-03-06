import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import LoadComments from "./LoadComments";


const DishDetail = (props) => {
    // console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top width="100%" src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle tag="h5">{props.dish.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Category: {props.dish.category}</CardSubtitle>
                <CardText>
                        {props.dish.description}
                </CardText>
        <CardText>
                        <b>Price: {props.dish.price}/-</b>
                    </CardText>
                    <hr />
                    <LoadComments dish={props.comments} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;