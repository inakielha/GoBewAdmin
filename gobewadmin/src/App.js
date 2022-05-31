import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './components/products/productsList/ProductsList';
<<<<<<< HEAD
import CreationForm from './components/products/createForm/CreationForm';
import CreationImage from './components/products/createForm/CreationImage';
=======
import Nav from './components/nav/Nav';
import CreationForm from './components/products/createForm/CreationForm';

>>>>>>> 844a7ee205a655c144f7cd66533146d66e559796
function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductsList/>
<<<<<<< HEAD
      <Routes>
      <Route exact path='/admin/' element={[<CreationForm />, <CreationImage/>]} />
      </Routes>
=======
      <CreationForm/>
>>>>>>> 844a7ee205a655c144f7cd66533146d66e559796
    </div>
  );
}

export default App;
