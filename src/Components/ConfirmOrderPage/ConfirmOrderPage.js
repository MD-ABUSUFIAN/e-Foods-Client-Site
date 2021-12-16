import React from 'react';
import { useParams } from 'react-router';

const ConfirmOrderPage = () => {
    const {detailsFood}=useParams(); console.log(detailsFood)
    return (
        <div>
            <h1>This is Confirm Order Page</h1>
        </div>
    );
};

export default ConfirmOrderPage;