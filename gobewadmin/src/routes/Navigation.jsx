import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';

import Nav from "../components/nav/Nav"
import CreationForm from '../components/products/createForm/CreationForm';
import CreationImage from '../components/products/createForm/CreationImage';
import CreationCategory from '../components/products/createForm/CreationCategory';

import { UserForm } from '../components/users/UserForm';
import { PrivateRoutes } from './PrivateRoutes';
import ItemProduct from '../components/products/productsList/ItemProduct';
import CreationFaq from '../components/company/faq/CreationFaq';
<<<<<<< HEAD
import FaqCardContainer from '../components/company/faq/FaqCardContainer';
=======
// import FaqsCreated from '../components/company/faq/FaqsCreated';
>>>>>>> 6a08d0434f95d8e0e899dd54d4a8c816595e94aa

export const Navigation = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={
          <PrivateRoutes>
            <ItemProduct />
          </PrivateRoutes>
        } />
        <Route path='/faq' element={
          <PrivateRoutes>
            <CreationFaq />
          </PrivateRoutes>
        } />
        <Route exact path='/user' element={
          <PrivateRoutes>
            <UserForm />
          </PrivateRoutes>
        } />

        <Route exact path='/product/new' element={[<CreationForm />]} />
        <Route exact path='/categories/new' element={[<CreationCategory />]} />
        <Route exact path='/product/image' element={[<CreationImage />]} />
<<<<<<< HEAD
        <Route exact path='/faq' element={[<CreationFaq />, <FaqCardContainer/>]} />
      
        <Route path='/login' element={ <Login /> } />
=======
        {/* <Route exact path='/faq' element={[<CreationFaq />, <FaqsCreated/>]} /> */}

        <Route path='/login' element={<Login />} />
>>>>>>> 6a08d0434f95d8e0e899dd54d4a8c816595e94aa
      </Routes>
    </Router>
  )
}
