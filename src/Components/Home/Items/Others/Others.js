import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Other= () => {
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
        <Container id="varities" className="my-5 main-box pb-5">
            { isLoading && <Spinner animation="border" variant="primary" />}
            <h1 className="text-center py-3 fw-bolder text-danger fs-1 main-box">Welcome e-Foods Varities Food item</h1>
           <div className="row mt-5">
               {
                   foods.map(food =><div key={food?._id} food={food} className="col col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
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

export default Other;