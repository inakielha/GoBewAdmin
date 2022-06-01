import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';

import Nav from "../components/nav/Nav"
import CreationForm from '../components/products/createForm/CreationForm';
import CreationImage from '../components/products/createForm/CreationImage';
import CreationCategory from '../components/products/createForm/CreationCategory';

import ProductsList from "../components/products/productsList/ProductsList"
import { PrivateRoutes } from './PrivateRoutes';

export const Navigation = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={ 
        <PrivateRoutes>
            <ProductsList/>
        </PrivateRoutes>
        } />
      
        <Route exact path='/product/new' element={[<CreationForm />]} />
        <Route exact path='/categories/new' element={[<CreationCategory />]} />
        <Route exact path='/product/image' element={[<CreationImage />]} />
      
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}
