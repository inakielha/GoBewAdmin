import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/products/productsList/ProductsList';
import Nav from './components/nav/Nav';
import CreationForm from './components/products/createForm/CreationForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={[<Nav />, <ProductsList />]} />
        <Route exact path='/product/new' element={[<CreationForm />]} />
      </Routes>
    </div>
  );
}

export default App;
