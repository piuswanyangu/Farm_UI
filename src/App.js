import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import the router
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import RegisterComponent from './Components/RegisterComponent';
import NotFound from './Components/NotFound';
import LoginComponent from './Components/LoginComponent';
import GetProductComponents from './Components/GetProductComponents';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/Register" element={<RegisterComponent/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/login' element={<LoginComponent/>}/>
      <Route  path='/exploreproduces' element={<GetProductComponents/>}/>
    </Routes>
   </Router>
  );
}

export default App;
