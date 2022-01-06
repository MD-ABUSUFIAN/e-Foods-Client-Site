import React from 'react';
import { Container } from 'react-bootstrap';
import './AppGellary.css'


const AppGellary = () => {
    return (
        <Container >
            <div className='appGellary-bg'>
                <div>
                    <img className=' appGellary-img' src="https://images.deliveryhero.io/image/foodpanda/home-corporate-bd.jpg?width=600&height=384" alt="" />
                </div>
                <div className='row '>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12 py-5 px-3 fw-bolder'>
                    <h1 className='text-white text-center'>Download the food and groceries you love</h1>
                    <p className='text-white text-center'>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                    </div>
                    <div className='col col-lg-6 col-md-6 col-sm-12 col-12'>
                        <img className='img-fluid' src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=600&height=477" alt="" />
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default AppGellary;