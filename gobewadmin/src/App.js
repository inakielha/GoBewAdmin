import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/products/productsList/ProductsList';
import CreationForm from './components/products/createForm/CreationForm';
import CreationImage from './components/products/createForm/CreationImage';
function App() {
  return (
    <div className="App">
      <ProductsList/>
      <Routes>
      <Route exact path='/admin/' element={[<CreationForm />, <CreationImage/>]} />
      </Routes>
    </div>
  );
}

export default App;
