
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Breakfast from '../src/Components/Home/Items/Breakfast/Breakfast';
import Launch from '../src/Components/Home/Items/Launch/Launch';
import Dinner from '../src/Components/Home/Items/Dinner/Dinner'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div>
     

      <BrowserRouter>
      
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
