
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ConfirmOrderPage from './Components/ConfirmOrderPage/ConfirmOrderPage';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import MyOrder from './Components/DashBoard/MyOrder/MyOrder';
import Payment from './Components/DashBoard/Payment/Payment';
import Review from './Components/DashBoard/Review/Review';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import AddProduct from './Components/DashBoard/AddProduct/AddProduct';
import Delivery from './Components/DashBoard/DeliveryStatus/Delivery';
import ManageOrder from './Components/DashBoard/ManageOrder/ManageOrder';

function App() {
  return (
  
     

     <AuthProvider>
     <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmOrder/:detailsFood" element={<PrivateRoute><ConfirmOrderPage/></PrivateRoute>}/>
        <Route path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>}/>
        <Route exact path="/dashboard" element={<DashBoard/>}/>
        <Route path="/dashboard/myOrder" element={<MyOrder/>}/>
        <Route path="/dashboard/payment" element={<Payment/>}/>
        <Route path="/dashboard/review" element={<Review/>}/>
        <Route path="/dashboard/manageOrder" element={<ManageOrder/>}/>
        <Route path="/dashboard/deliveryStatus" element={<Delivery/>}/>
        <Route path="/dashboard/addProduct" element={<AddProduct/>}/>
        <Route path="/dashboard/makeAdmin" element={<MakeAdmin/>}/>
        </Routes>
      
    </BrowserRouter>
     </AuthProvider>
    
  );
}

export default App;
