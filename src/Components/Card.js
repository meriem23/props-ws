import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card as MyCard } from 'react-bootstrap';
const Card = ({ product }) => {

    return (
        <MyCard style={{ width: '18rem' }}>
            <MyCard.Img variant="top" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" />
            <MyCard.Body>
                <MyCard.Title>{product.productName}</MyCard.Title>
                <MyCard.Text>
                    {product.productDescription}
                </MyCard.Text>
                <Button variant="primary">{product.productButton}</Button>
            </MyCard.Body>
        </MyCard>
    )
}

export default Card