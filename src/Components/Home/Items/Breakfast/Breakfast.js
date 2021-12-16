import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Breakfast.css'




const Breakfast = () => {
    const[foods,setFoods]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://pacific-journey-19792.herokuapp.com/foodsItem')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        
          setFoods(data)
          setIsLoading(false)
          
        })
    },[])
    return (
        <Container id="breakfast" className="my-5 pb-5 main-box">
            { isLoading && <Spinner animation="border" variant="primary" />}
            
            <h1 className="text-center py-3 fw-bolder text-black fs-1 main-box">Welcome e-Foods BreakFast Food Items</h1>
           <div className="row mt-5 ">
               {
                   foods.map(food =><div key={food?._id} food={food} className="col col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
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
                                <Link to={`/confirmOrder/${food._id}`}>
                            <button className="btn btn-primary fw-bolder">Order-Now</button>
                            </Link>
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

export default Breakfast;