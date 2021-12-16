import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashBoardNav from '../DashBoardNav/DashBoardNav';



const ManageOrder = () => {
    const[foods,setFoods]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://pacific-journey-19792.herokuapp.com/foodsItem')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          
          setFoods(data)
         
        })
        setIsLoading(false)
       
    },[isLoading])

    const handleDelete=id=>{
        console.log(id)
    }
   
    return (
       <div>
           <DashBoardNav/>

            <Container id="breakfast" className="my-5 pb-5 main-box">
            { isLoading &&  <Spinner animation="border" variant="primary" />}
            <h1 className="text-center py-3 fw-bolder text-black fs-1 main-box">MANAGE ALL FOODS ORDER</h1>
            
           <div className="row mt-5 ">
               {
                   foods?.map(food =><div key={food?._id} food={food} className="col col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={food?.image}  />
                            <Card.Body>
                                <Card.Title className="fw-bolder text-black">{food?.title}</Card.Title>
                                <Card.Text>
                                    {food?.description}
                                </Card.Text>
                                <Card.Text className='fs-5 text-black'>
                                    Price: <span className='text-danger fw-bolder fs-4'>${food?.price}</span>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                             
                            <button onClick={()=>handleDelete(food?._id)} className="btn btn-danger fw-bold">DELETE</button>
                          
                            </Card.Footer>
                         </Card>

                    </CardGroup>
                   </div>
                    
               
                   
                   )
               }

           </div>
        </Container>
       </div>
    );
};

export default ManageOrder;