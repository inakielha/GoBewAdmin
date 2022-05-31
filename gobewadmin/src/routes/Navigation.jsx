import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';

import Nav from "../components/nav/Nav"
import ProductsList from "../components/products/productsList/ProductsList"
import { PrivateRoutes } from './PrivateRoutes';

export const Navigation = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={ 
        // <PrivateRoutes>
            <ProductsList/>
        // </PrivateRoutes>
        } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}
