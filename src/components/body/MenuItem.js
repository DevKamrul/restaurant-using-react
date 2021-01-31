import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';


const MenuItem = (props) => {
    // console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top width="100%" src={props.dish.image} alt={props.dish.name} style={{ opacity: "0.5" }} />
                <CardBody>
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onClick={() => props.DishSelect(props.dish)} tag="h5">{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;