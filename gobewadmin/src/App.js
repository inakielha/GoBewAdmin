// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/products/productsList/ProductsList';
import Nav from './components/nav/Nav';
import CreationForm from './components/products/createForm/CreationForm';
import CreationImage from './components/products/createForm/CreationImage';
import CreationCategory from './components/products/createForm/CreationCategory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={[<Nav />, <ProductsList />]} />
        <Route exact path='/product/new' element={[<CreationForm />]} />
        <Route exact path='/categories/new' element={[<CreationCategory />]} />
        <Route exact path='/product/image' element={[<CreationImage />]} />
      </Routes>
    </div>
  );
}

export default App;
