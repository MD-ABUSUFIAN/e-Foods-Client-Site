import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const foods=[
    {
        id:1,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
    {
        id:2,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
    {
        id:3,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
    {
        id:4,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
    {
        id:5,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
    {
        id:6,
        title:"Nanna Kacchi",
        image:"https://static.hungrynaki.com/hungrynaki-v4/restaurants/nanna_kacchi_ghar/meta/nanna_kacchi_ghar_cover_1630786753688.jpeg",
        description:"South Indian Biryani Food test and Yummy Yummy with Sweet Firni 1 Cup from Nanna Kacchi Ghor,Mirpur,Dhaka,Bangladesh",
        price:50,
    },
]

const Other= () => {
    return (
        <Container id="varities" className="my-5 main-box pb-5">
            <h1 className="text-center py-5 fw-bolder text-danger fs-1">Welcome e-Foods Varities Food item</h1>
           <div className="row ">
               {
                   foods.map(food =><div key={food?.id} food={food} className="col col-lg-3 col-md-4 col-sm-6 col-6 mb-2">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={food?.image}  />
                            <Card.Body>
                                <Card.Title>{food?.title}</Card.Title>
                                <Card.Text>
                                    {food?.description}
                                </Card.Text>
                                <Card.Text className='fs-5 text-black'>
                                    Price: <span className='text-danger fw-bolder fs-4'>${food?.price}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <button className="btn btn-primary fw-bolder">Order-Now</button>
                            </Card.Footer>
                         </Card>

                    </CardGroup>
                   </div>
                    
                   
                   
                   )
               }

           </div>
        </Container>
    );
};

export default Other;